import "../../css/Shared/suggestionBoxObj.css";

const SuggestedLeagueObj = (props) => {
    return(
        <div id = "SuggestedLeagueObj" className="suggestionObj">
            <div className = "suggestionImageSection">
                <img className = "suggestionImage" src = {props.photo}/>
            </div>
            <div className = "suggestionWritingSection">
                <p  className = "suggestionHeaderStyle" >{props.leagueName}</p>
                <p  className = "suggestionTextStyle">{props.mutualFriends} Mutual Friends</p>
            </div>
        </div>
    )
}


export default SuggestedLeagueObj;