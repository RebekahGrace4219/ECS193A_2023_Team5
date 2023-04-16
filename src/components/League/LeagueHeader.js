import {useState, useEffect} from 'react';
import axios from "axios";
import QRcode from "qrcode";
import "../../css/League/leagueHeader.css";
import "../../css/Shared/button.css";

const backend_url = process.env.REACT_APP_PROD_BACKEND;

const LeagueHeader = (props) => {
    const [id] = useState(props.children.id);
    const [loaded, setLoaded] = useState(false);
    const [leagueName, setLeagueName] = useState();
    const [numberMembers, setNumberMembers] = useState();
    const [numberChallenges, setNumberChallenges] = useState();
    const [leagueDescription, setLeagueDescription] = useState();
    const [leaguePhoto, setLeaguePhoto] = useState();
    const [qrCode, setQRCode] = useState("");

    useEffect (
        () => {
            if(!loaded){
                generateQRCode();
                getLeagueName();
                getNumberChallenges();
                getLeagueDescription();
                getLeaguePhoto();
                getNumberMembers();

            }
        }, [loaded]
    );

    const generateQRCode = () => {
        let url = "tread.run/requestLeaguePage?" + id;
        QRcode.toDataURL(url, {"color":{"light":"#F1EEEA"}}, (err, url) => {
            if (err) return console.error(err)

            setQRCode(url);
        })
    }

    function getLeagueName(){
        var config  = {
          method : 'post',
          url: backend_url+'league/get_league_name',
          headers: {
              Accept: 'application/json',
            },
          withCredentials: true,
          credentials: 'include',
          data : {
            leagueID: id
          }
        };
        axios(config)
        .then(function(response) {
            setLeagueName(response.data.leagueName);
        })
        .catch(function(error){
            if(error.response.status===401){
                window.location.href = "/loginPage";
            }
            console.log(error)
        });
    }

    function getNumberChallenges(){
        var config = {
            method : 'post',
            url : backend_url + 'league/get_league_active_challenges',
            headers: {
            Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
            data:{
                leagueID: id
            }
        };
        axios(config)
        .then(function(response){
            setNumberChallenges(response.data);
        })
        .catch(function(error){
            console.log(error)
        });
    }

    function getLeagueDescription() {
        var config  = {
            method : 'post',
            url: backend_url+'league/get_league_description',
            headers: {
                Accept: 'application/json',
              },
            withCredentials: true,
            credentials: 'include',
            data : {
              leagueID: id
            }
          };
          axios(config)
          .then(function(response) {

              setLeagueDescription(response.data.leagueDescription);
          })
          .catch(function(error){
              console.log(error)
          });
    }

    function getLeaguePhoto(){
        var config  = {
            method : 'post',
            url: backend_url+'league/get_league_picture',
            headers: {
                Accept: 'application/json',
              },
            withCredentials: true,
            credentials: 'include',
            data : {
              leagueID: id
            }
          };
          axios(config)
          .then(function(response) {


              setLeaguePhoto(response.data.leaguePicture);
          })
          .catch(function(error){
              console.log(error)
          });
    }

    function getNumberMembers(){
        var config = {
            method : 'post',
            url : backend_url + 'league/get_member_list',
            headers: {
            Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
            data:{
                leagueID: id
            }
        };
        axios(config)
        .then(function(response){
            setNumberMembers(response.data.length);
        })
        .catch(function(error){
            console.log(error)
        });
    }

    function moveDescriptionPage(){
        window.location.href = "./leagueDescriptionPage?="+ id;
    }

    function moveMemberPage(){
        window.location.href = "./leagueMemberPage?=" + id;
    }
    return(
        <div id = "LeagueHeader">
            <div className = "leagueHeaderTop">
                <h2>{leagueName}</h2>
                <p>{leagueDescription}</p>
            </div>
            <div className = "leagueMain">
                <div className = "leagueMainLeft">
                    <div className = "leaguePhotoDiv">
                        <img className = "leagueProfilePhoto" src = {leaguePhoto} alt = "league"/>
                    </div>
                    <div className='leagueItem'>
                        <button className = "movePageButton" onClick = {moveDescriptionPage}><h3>{numberChallenges} Active Challenges</h3></button>
                        <button className = "movePageButton" onClick = {moveMemberPage} ><h3>{numberMembers} Members</h3></button>
                    </div>
                </div>
                <div className='leagueMainRight'>
                    <h2>Add Code</h2>
                    <img src = {qrCode} alt = "qrcode"/>
                </div>
            </div>
        </div>
    )

}

export default LeagueHeader;