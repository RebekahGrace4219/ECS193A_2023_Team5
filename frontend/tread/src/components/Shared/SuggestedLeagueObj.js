import "../../css/Shared/suggestionBoxObj.css";

const SuggestedLeagueObj = (props) => {
    return(
        <div id = "SuggestedLeagueObj">
            <div>
                <img src = "https://i.imgur.com/uPaX0Km.png"/>
            </div>
            <div>
                <p>{props.leagueName}</p>
                <p>{props.mutualFriends} Mutual Friends</p>
            </div>
        </div>
    )
}


export default SuggestedLeagueObj;