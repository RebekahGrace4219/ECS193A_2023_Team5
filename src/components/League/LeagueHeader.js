import {useState} from 'react';

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
        <div>
            <div>
                <h2>{leagueName}</h2>
                <p>{leagueDescription}</p>
            </div>
            <div>
                <div>
                    <div>
                        <img src = {leaguePhoto} alt = "league"/>
                    </div>
                    <div>
                        <p>{numberMembers} Members</p>
                        <p>{numberChallenges} Active Challenges</p>
                    </div>
                </div>
                <div>
                    <h2>Add Code</h2>
                    <img src = "https://i.imgur.com/rpi5EL2.png" alt = "qrcode"/>
                </div>
            </div>
        </div>
    )

}

export default LeagueHeader;