import ProgressBar from "./ProgressBar";
const LeaderboardEntry = (props) => {

    return (
    <div id = "LeaderboardEntry">
        <div>
            {(props.children.level === 1) ? <img src = "https://i.imgur.com/m5iDo4X.png"/>: <></>}
            {(props.children.level === 1) ? <img src = "https://i.imgur.com/QctK692.png"/>: <></>}
            {(props.children.level === 1) ? <img src = "https://i.imgur.com/QaT2m92.png"/>: <></>}
            {(props.children.level > 3) ? <p>{props.children.level}</p>: <></>}
        </div>
        <div>
            <img src={props.children.photo}/>
            <p>{props.children.displayName}</p>
            <ProgressBar>{{"children":props.children.complete}}</ProgressBar>
            <img src= "https://i.imgur.com/lfvWyWP.png"/>
            <p>{props.children.score}</p>
        </div>
    </div>
    );
}

export default LeaderboardEntry;