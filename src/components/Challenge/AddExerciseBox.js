import {useState} from 'react';
import "../../css/Challenge/addExercise.css";
import "../../css/Shared/form.css";

import axios from "axios";
const backend_url = process.env.REACT_APP_DEV_BACKEND;

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




const AddExerciseBox = () => {
    const [selfSpecify, setSelfSpecify] = useState(false);
    const [sport, setSport] = useState("Aikido");
    const [specifyError, setSpecifyError] = useState("");
    const [unit, setUnit] = useState("ct");
    const [amount, setAmount] = useState(0);
    const [completionDate, setCompletionDate] = useState();
    const [submitError, setSubmitError] = useState("");

    function sportChange(event){
        setSelfSpecify((event.target.value === "Other (Specify Below)"));

        if (event.target.value !== "Other (Specify Below)"){
            setSport(event.target.value);
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
        console.log(
         "setting unit", event.target.value
        );
        setUnit(event.target.value);
    }

    function completionDateChange(event){
        setCompletionDate(event.target.valueAsNumber);
    }

    function submitExercise(){
        // Check that the sport has length > 0
        if (sport.length === 0){
            setSpecifyError("Sport should have length greater than 0");
            setSubmitError("Sport should be selected.")
            return false;
        }

        if (amount <= 0){
            setSubmitError("Exercise amount needs to be positive");
            return false;
        }

        console.log("Sending",{
            loggedDate: completionDate,
            exerciseName: sport,
            unit: unit,
            amount: amount

        });
        var config = {
            method : 'post',
            url : backend_url + 'exercise_log/add',
            headers: {
            Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
            data:{
                loggedDate: completionDate,
                exerciseName: sport,
                unit: unit,
                amount: amount

            }
        };
        axios(config)
        .then(function(response){
            console.log(response);
            console.log("success!!!");
            // wipe all the info
            setSport("");
            setAmount(0);
            setSpecifyError("");
            setSubmitError("");
            document.getElementById("addExerciseAmount").value = 0;
            document.getElementById("addExerciseSelfSpecify").value = "";
            document.getElementById("addExerciseSport").value = "Archery";
            document.getElementById("addExerciseSelfUnit").value = "ct";
            document.getElementById("addExerciseDate").value = "";
        })
        .catch(function(error){
            console.log(error)
        });
    }
    return(
        <div id = "AddExerciseBox">
            <h2>Add an Exercise</h2>
            <div className = "horizontalForm">
                <p>Exercise</p>
                <select id = "addExerciseSport" name = "addExerciseSport" className = "formSelect" onChange = {sportChange}>
                    {sportList.map((name)=>{return <option value = {name}>{name}</option>;})}
                </select>
            </div>
            {selfSpecify ?
                <div className = "horizontalForm">
                    <p>Specify your own activity: </p>
                    <input className = "formTextInput" id = "addExerciseSelfSpecify" type = "text" onChange = {selfSpecifyChange}/>
                    {specifyError ? <p className = "errorBox">{specifyError}</p> :<></>}
                </div>
                :
                <></>
            }

            <div className = "horizontalForm">

                <p>How much?</p>
                <div className='twoDivForm'>
                <input className = "formTextInput" id = "addExerciseAmount" type = "number" min = "1" onChange = {amountChange}/>
                    <select className = "formSelect" id = "addExerciseUnit" onChange = {unitChange}>
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


            <div className = "horizontalForm">
                <p>Date</p>
                <input className = "formDateInput" id = "addExerciseDate" type = "date" onChange = {completionDateChange}></input>
            </div>

            <div className = "formButton">
                <button className="submitButton" onClick = {submitExercise}><p className = "submitButtonText">Submit</p></button>
                <p>{submitError}</p>
            </div>
        </div>
    )

}

export default AddExerciseBox;