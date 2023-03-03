import LeagueObj from './LeagueObj';
import {useState,useEffect} from 'react';

const LeagueScroll = (props) => {
    let [scrollType] = useState(props.type);
    let [information, setInformation] = useState([]);

    function getAll(){
        // get Friends
        setInformation([{"leagueName":"Justice League", "memberCount":23, "activeChallenges":"1","picture":"https://i.imgur.com/uPaX0Km.png"}]);
    }

    function getSent(){
        // get Sents
        setInformation([{"leagueName":"Justice League", "memberCount":23, "activeChallenges":"1","picture":"https://i.imgur.com/uPaX0Km.png"}]);
    }

    function getAdmin(){
        // get Received
        setInformation([{"leagueName":"Justice League", "memberCount":23, "activeChallenges":"1","picture":"https://i.imgur.com/uPaX0Km.png"}]);
    }

    function getOwner(){
        // get Blocked
        setInformation([{"leagueName":"Justice League", "memberCount":23, "activeChallenges":"1","picture":"https://i.imgur.com/uPaX0Km.png"}]);
    }

    function makeLeagueObj(input){
        return (<LeagueObj type = {scrollType}>{input}</LeagueObj>);
    }

    useEffect (
        () => {
            if(scrollType === "league"){
                getAll();
            }
            else if(scrollType === "sent"){
                getSent();
            }
            else if(scrollType === "admin"){
                getAdmin();
            }
            else if(scrollType === "owner"){
                getOwner();
            }
        }, [scrollType]
    );

    return(
        <div id = "LeagueScroll">
            {information.map(makeLeagueObj)}
        </div>
    )
}

export default LeagueScroll;