import "../../css/Shared/suggestionBoxObj.css";

const RecentMedalObj = (props) => {
    return(
        <div id = "RecentMedalObj">
            <img src = "https://i.imgur.com/tvafW72.png" alt = "trophy"></img>
            <p>{props.name}</p>
        </div>
    )
}


export default RecentMedalObj;