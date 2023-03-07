import {useState} from 'react';
import ChallengeScroll from "../Challenge/ChallengeScroll";

const LeagueChallengeList = (props) => {
    console.log("League Challenge list", props.children.id);
    const [id] = useState(props.children.id);

    return(<div>
        <h2>Active Challenges</h2>
        <ChallengeScroll type = "issued" ifLeague = {true} leagueID = {id}></ChallengeScroll>
    </div>

    );
}

export default LeagueChallengeList;