import "../../css/Shared/suggestionBox.css";

const RecentMedalObj = (props) => {
    return(
        <div id = "RecentMedalObj" className="suggestionObj">
            <div className = "suggestionImageSection">
                <img className = "suggestionImage" src = "https://i.imgur.com/tvafW72.png" alt = "trophy"></img>
            </div>
            <div className = "suggestionWritingSection" id = "MedalsWritingSection">
                <p className = "suggestionTextStyle">{props.name}</p>
            </div>
        </div>
    )
}


export default RecentMedalObj;