import axios from 'axios';
import Line from "../Shared/Line";
import {useState, useEffect} from 'react';
import '../../css/Shared/form.css'
import '../../css/Shared/button.css'
const backend_url = process.env.REACT_APP_DEV_BACKEND

let sportList =  [
    "Aikido",
    "Archery",
    "Badminton",
    "Baseball",
    "Basketball",
    "Beach Volleyball",
    "Billards",
    "Bocce",
    "Bowling",
    "Boxing",
    "Brazilian Jiu-Jitsu",
    "Cheer",
    "Chess Boxing",
    "Cricket",
    "Cross-fit",
    "Cup Stacking",
    "Cycle",
    "Dodgeball",
    "Dressage",
    "Elliptical",
    "E-Sports",
    "Fish",
    "Football (American)",
    "Golf",
    "Gymnastics",
    "HIIT",
    "Hammer Throw",
    "Handball",
    "High Dive",
    "High Jump",
    "Hike",
    "Hockey",
    "Horse Racing",
    "Ice Skate",
    "Judo",
    "Karate",
    "Kickboxing",
    "Krav Maga",
    "Kung Fu",
    "Lacrosse",
    "Luge",
    "Martial Arts",
    "Netball",
    "Pickleball",
    "Pilates",
    "Pole Dance",
    "Polo",
    "Pool",
    "Quidditch",
    "Racquetball",
    "Rings (Gymnastics)",
    "Rock Climb",
    "Rodeo",
    "Rope Climb",
    "Rowing",
    "Rugby",
    "Run",
    "Sail",
    "Shot put",
    "Shuffleboard",
    "Skateboard",
    "Ski",
    "Sled",
    "Soccer",
    "Softball",
    "Speed Skate",
    "Spin",
    "Sport Kite",
    "Stairs",
    "Strech",
    "Surfing",
    "Swim",
    "Table Tennis",
    "Taekwondo",
    "Tennis",
    "Track and Field",
    "Treadmill",
    "Triathlon",
    "Volleyball",
    "Walk",
    "Water Polo",
    "Weightlifting (Lower Body)",
    "Weightlifting (Upper Body)",
    "Weightlifting",
    "Wrestling",
    "Yoga",
    "Other (Specify Below)",
    ];

const ChallengeForm = () =>{
    const [selfSpecify, setSelfSpecify] = useState(false);
    const [sport, setSport] = useState("Aikido");
    const [specifyError, setSpecifyError] = useState("");
    const [unit, setUnit] = useState("ct");
    const [amount, setAmount] = useState(0);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [receiverGroup, setReceiverGroup] = useState("self");
    const [receiver, setReceiver] = useState();
    const [inviteOptions, setInviteOptions] = useState([]);
    const [submitError, setSubmitError] = useState("");
    /***/

    function sportChange(event){
        setSelfSpecify((event.target.value === "Other (Specify Below)"));

        if (event.target.value !== "Other (Specify Below)"){
            setSport(event.target.value);
            setSpecifyError("")
        }
    }

    function selfSpecifyChange(event){
        let selfEntry = event.target.value;

        if (selfEntry.length === 0 || selfEntry.length > 32){
            setSpecifyError("The sport object should be 1-32 characters");
            return false;
        }
        setSpecifyError("");
        setSport(event.target.value);
    }

    function amountChange(event){
        setAmount(event.target.value);
    }
    function unitChange(event){
        setUnit(event.target.value);
    }

    function startDateChange(event){
        setStartDate(event.target.value);
    }

    function endDateChange(event){
        setEndDate(event.target.value);
    }

    function receiverChange(event){
        console.log(event);
        setReceiver(event.target.value);
    }

    function receiverGroupChange(event){
        setReceiverGroup(event.target.value);
    }

    function getToday(){
      let date_ob = new Date()

      let date = ("0" + date_ob.getDate()).slice(-2);
      let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
      let year = date_ob.getFullYear();

      return (year + "-" + month + "-" + date);
    }

    function getTomorrow(){
      var date_ob = new Date()
      date_ob.setDate(date_ob.getDate() + 1);

      let date = ("0" + date_ob.getDate()).slice(-2);
      let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
      let year = date_ob.getFullYear();

      return (year + "-" + month + "-" + date);
    }

    function getFriends(){
        // use SetInviteOptions to make it a list of friend names
        var config ={
          method: 'post',
          url : backend_url+'friend_list/friend_list',
          headers: {
              Accept: 'application/json',
            },
          withCredentials: true,
          credentials: 'include'
        };
        axios(config)
        .then(function(response){
            setInviteOptions(response.data);
        })
        .catch(function(error){
            console.log(error);
            console.log("No response")
        });
    }

    function getLeagues(){
        // use SetInviteOptions to make it a list of leagues that user is ADMIN or OWNER of
        var array_leagues = []
        var config ={
          method: 'post',
          url : backend_url+'league/get_admin_leagues',
          headers: {
              Accept: 'application/json',
            },
          withCredentials: true,
          credentials: 'include'
        };
        axios(config)
        .then(function(response){
            for(let item of response.data){
              array_leagues.push(item.leagueName + " - " + item._id);
            }
            setInviteOptions(array_leagues);
        })
        .catch(function(error){
            console.log(error);
            console.log("No response")
        });
    }

    function submitChallenge(){
        //TODO
        if (specifyError !== ""){
          setSubmitError("Correct the highlighted fields to proceed")
          return false;
        }

        var recipient = ""
        recipient = receiver
        if (receiverGroup === "league"){
          recipient = receiver.split('-')[1].trim();
        }

        var config ={
          method : 'post',
          url : backend_url+"challenges/add_"+receiverGroup+"_challenge",
          headers: {
            Accept: 'application/json',
          },
          withCredentials: true,
          credentials: 'include',
          data :
          {
            receivedUser : recipient,
            issueDate : startDate,
            dueDate : endDate,
            unit : unit,
            amount : amount,
            exerciseName : sport,
          }
        };
        axios(config)
        .then(function(response){
          window.location.href = "./currentChallengePage";
        })
        .catch(function(err){
          setSubmitError("Error in issuing challenge");
          console.log(err)
        })

        // Validate the input
            // If the user selects "self specify", there needs to be a string > length 1 in the field
                // -> if not, set the error response using setSpecifyErrorResponse();
            // All other fields should be locked by their own types and do not need to be validated
        // Sent the post request (make sure to select the exercise in the drop down or the self specify based on selfSpecify and only send one)
        // Check the post request response, set the submitErrorResponse message if it fails
        // if post succeeds, move to the current page
    }

    useEffect(
        () => {
          if (receiverGroup === "friend") {
            getFriends();
          }
          else if(receiverGroup === "league"){
            getLeagues();
          }
        }, [receiverGroup]
      );


    return (
        <div id = "ChallengeForm" className = "Form">
            <h1>Challenges</h1>
            <h2>Create a Challenge</h2>
            <Line/>
            <div className = "formObj">
                <p className = "formObjInner">Exercise Type:</p>
                <div className = "formObjInner">
                    <select className = "formSelect" onChange = {sportChange}>
                        {sportList.map((name)=>{return <option value = {name}>{name}</option>;})}
                    </select>
                </div>

            </div>

            {selfSpecify ?
                <div className="formObj">
                    <p className = "formObjInner">Specify your own activity: </p>
                    <input className = "formTextInput" type = "text" onChange = {selfSpecifyChange}/>
                    <p className = "errorBox">{specifyError}</p>
                </div>
                :
                <></>
            }

            <div className = "formObj">
                <p className = "formObjInner">How much?</p>
                <div className = "formObjInner">
                    <input className = "formTextInput" type = "number" onChange = {amountChange}/>
                    <select className = "formSelect" onChange = {unitChange}>
                        <option value = "ct">ct</option>
                        <option value = "m">m</option>
                        <option value = "km">km</option>
                        <option value = "ft">ft</option>
                        <option value = "yd">yd</option>
                        <option value = "mi">mi</option>
                        <option value = "min">min</option>
                        <option value = "hr">hr</option>
                    </select>
                </div>
            </div>

            <div className = "formObj">
                <p className = "formObjInner">Start Date</p>
                <input id="issueDate" className = "formDateInput" type = "date" min = {getToday()} onChange = {startDateChange}></input>
            </div>

            <div className = "formObj">
                <p className = "formObjInner">End Date</p>
                <input id="dueDate" className = "formDateInput" type = "date" min = {getTomorrow()} onChange = {endDateChange}></input>
            </div>

            <div className = "formObj">
                <p className = "formObjInner">What kind of challenge?</p>
                <div className = "formObjInner">
                    <select className="formSelect" onChange = {receiverGroupChange}>
                        <option value = "self">Self</option>
                        <option value = "friend">Friend</option>
                        <option value = "league">League</option>
                    </select>
                </div>
            </div>

            { (receiverGroup  === "friend" || receiverGroup === "league") ?
            <div className = "formObj">
                <p className = "formObjInner">Who should receive the challenge?</p>
                <div>
                    <select onChange = {receiverChange} className = "formSelect">
                        <option value = ""></option>
                    {inviteOptions.map((name)=>{return <option>{name}</option>;})}
                    </select>
                </div>
            </div>

            :

            <></>

            }

            <div className = "formObj">
            <button className="submitButton" onClick = {submitChallenge}><p className = "submitButtonText">Submit</p></button>
            <p className = "errorBox">{submitError}</p>
            </div>

        </div>
    );
}

export default ChallengeForm;
