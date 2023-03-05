import "../../css/Shared/pageSwitch.css"
const PageSwitch = (props) => {

    function moveProfileStats(){
        window.location.href = "./profileStatsPage";
    }

    function moveProfileMedals(){
        window.location.href = "./profileMedalPage";
    }

    function moveCurrentChallenge(){
        window.location.href = "./currentChallengePage";
    }

    function moveWeeklyChallenge(){
        window.location.href = "./weeklyChallengePage";
    }

    function moveSocialFriend(){
        window.location.href = "./socialFriendPage";
    }

    function moveSocialLeague(){
        window.location.href = "./socialLeaguePage";
    }

    return(
        <div>
        {  props.type === "challenge" ?
            <div id ="PageSwitch">
                <button className = "switchButton" onClick = {moveCurrentChallenge}><p className = "switchButtonText">Current</p></button>
                <button className = "switchButton" onClick = {moveWeeklyChallenge}><p className = "switchButtonText">Global</p></button>
            </div>
            :
            <></>
        }
        {  props.type === "social" ?
            <div id ="PageSwitch">
                <button className = "switchButton" onClick = {moveSocialFriend}><p className = "switchButtonText">Friend</p></button>
                <button className = "switchButton" onClick = {moveSocialLeague}><p className = "switchButtonText">League</p></button>
            </div>
            :
            <></>
        }
        {  props.type === "profile" ?
            <div id ="PageSwitch">
                <button className = "switchButton" onClick = {moveProfileStats}><p className = "switchButtonText">Stats</p></button>
                <button className = "switchButton" onClick = {moveProfileMedals}><p className = "switchButtonText">Medals</p></button>
            </div>
            :
            <></>
        }
        </div>


    )
}

export default PageSwitch;