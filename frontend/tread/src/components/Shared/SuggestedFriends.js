import "../../css/suggestedFriends.css"
import SuggestedFriendObj from "./SuggestedFriendObj";
const SuggestedFriends = () => {

    return (
        <div id = "SuggestedFriendsDiv">
            <p id = "SuggestedFriendsTitle">Suggested Friends</p>
            <div>
                <SuggestedFriendObj displayName = "Shazam" mutualLeagues = "0" mutualFriends = "3" ></SuggestedFriendObj>
                <SuggestedFriendObj displayName = "Green Arrow"  mutualLeagues = "2" mutualFriends = "3"></SuggestedFriendObj>
                <SuggestedFriendObj displayName = "Aquaman"  mutualLeagues = "0" mutualFriends = "4"></SuggestedFriendObj>
                <SuggestedFriendObj displayName = "Black Canary"  mutualLeagues = "1" mutualFriends = "7"></SuggestedFriendObj>
                <SuggestedFriendObj displayName = "Ra's al Ghul"  mutualLeagues = "1" mutualFriends = "3"></SuggestedFriendObj>
                <SuggestedFriendObj displayName = "Ra's al Ghul"  mutualLeagues = "3" mutualFriends = "6"></SuggestedFriendObj>
            </div>
        </div>
    );
}


export default SuggestedFriends;