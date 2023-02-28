import "../../css/Shared/suggestionBoxObj.css";

const SuggestedFriendObj = (props) => {
    console.log(props);
    return (
        <div id = "SuggestedFriendObj">
            <div className = "profilePhoto"><img id = "profilePhotoSuggested" src = "https://i.imgur.com/7vaxEiJ.png"/></div>
            <div className = "writingSectionSuggested">
                <div id = "displayNameSuggested">{props.displayName}</div>
                <div className = "MutualStyle">{props.mutualFriends}+ Mutual Friends</div>
                <div className = "MutualStyle">{props.mutualLeagues} Mutual Leagues</div>
            </div>
        </div>
    );
}


export default SuggestedFriendObj;