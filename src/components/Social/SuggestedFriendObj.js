import "../../css/Shared/suggestionBoxObj.css";

const SuggestedFriendObj = (props) => {
    return (
        <div className="suggestionObj">
            <div className = "suggestionImageSection">
                <img className = "suggestionImage" src = "https://i.imgur.com/jJaPs4q.png"/>
            </div>
            <div className = "suggestionWritingSection">
                <div  className = "suggestionHeaderStyle">{props.displayName}</div>
                <div  className = "suggestionTextStyle">{props.mutualFriends}+ Mutual Friends</div>
                <div  className = "suggestionTextStyle">{props.mutualLeagues} Mutual Leagues</div>
            </div>
        </div>
    );
}


export default SuggestedFriendObj;