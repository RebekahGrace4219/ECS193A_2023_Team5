import "../../css/Shared/suggestionBox.css";

const SuggestedFriendObj = (props) => {
    console.log("Friend is getting: ", props);
    return (
        <div className="suggestionObj">
            <div className = "suggestionImageSection">
                <img className = "suggestionImage" src = {props.picture}/>
            </div>
            <div className = "suggestionWritingSection">
                <div  className = "suggestionHeaderStyle">{props.username}</div>
                <div  className = "suggestionTextStyle">{props.mutualFriends} Mutual Friends</div>
            </div>
        </div>
    );
}


export default SuggestedFriendObj;