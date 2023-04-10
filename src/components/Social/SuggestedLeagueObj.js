import "../../css/Shared/suggestionBox.css";

const SuggestedLeagueObj = (props) => {
    return(
        <div id = "SuggestedLeagueObj" className="suggestionObj">
            <div className = "suggestionImageSection">
                <img className = "suggestionImage" src = "https://i.imgur.com/uPaX0Km.png"/>
            </div>
            <div className = "suggestionWritingSection">
                <p  className = "suggestionHeaderStyle" >{props.leagueName}</p>
                <p  className = "suggestionTextStyle">{props.mutualFriends} Mutual Friend(s)</p>
            </div>
        </div>
    )
}


export default SuggestedLeagueObj;