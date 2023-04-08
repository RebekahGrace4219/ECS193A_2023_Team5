import "../../css/Shared/leaderboard.css";

const LeagueLeaderboardEntry = (props) => {
    return (
    <div id = "LeaderboardEntry">
        <div className = "leaderboardEntryImage">
            {(props.children.level === 1) ? <img src = "https://i.imgur.com/m5iDo4X.png"/>: <></>}
            {(props.children.level === 2) ? <img src = "https://i.imgur.com/QctK692.png"/>: <></>}
            {(props.children.level === 3) ? <img src = "https://i.imgur.com/QaT2m92.png"/>: <></>}
            {(props.children.level !== 1 && props.children.level !== 2 && props.children.level !== 3) ? <p>{props.children.level}</p>: <></>}
        </div>
        <div className = "leaderboardRightSide">
            <img className = "leaderboardPhoto firstDiv" src={props.children.picture}/>
            <p className="leaderboardText secondDiv">{props.children.username}</p>
            <p className="leaderboardText fifthDiv">{props.children.completed}</p>
        </div>
    </div>
    );
}

export default LeagueLeaderboardEntry;