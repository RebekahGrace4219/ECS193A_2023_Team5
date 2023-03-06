import {useState} from 'react';
import "../../css/League/leagueHeader.css";

const LeagueHeader = (props) => {
    const [id] = useState(props.children.id);
    const [leagueName] = useState(getLeagueName());
    const [numberMembers] = useState(getNumberMembers());
    const [numberChallenges] = useState(getNumberChallenges());
    const [leagueDescription] = useState(getLeagueDescription());
    const [leaguePhoto] = useState(getLeaguePhoto());

    function getLeagueName(){
        // use id to the get the league name
        return "Pokemon League";
    }

    function getNumberChallenges(){
        // use id to get the challenges
        return 2;
    }

    function getLeagueDescription() {
        // use id to get the league description
        return "We play Pokemon Go while biking";
    }

    function getLeaguePhoto(){
        // use id to get League photo
        return "https://i.imgur.com/TqFO1Ha.png";
    }

    function getNumberMembers(){
        //
        return 23;
    }
    return(
        <div id = "LeagueHeader">
            <div className = "leagueHeaderTop">
                <h2>{leagueName}</h2>
                <p>{leagueDescription}</p>
            </div>
            <div className = "leagueMain">
                <div className = "leagueMainLeft">
                    <div className = "leaguePhotoDiv leagueItem">
                        <img className = "leagueProfilePhoto" src = {leaguePhoto} alt = "league"/>
                    </div>
                    <div className='leagueItem'>
                        <h3>{numberMembers} Members</h3>
                        <h3>{numberChallenges} Active Challenges</h3>
                    </div>
                </div>
                <div className='leagueMainRight'>
                    <h2>Add Code</h2>
                    <img src = "https://i.imgur.com/rpi5EL2.png" alt = "qrcode"/>
                </div>
            </div>
        </div>
    )

}

export default LeagueHeader;