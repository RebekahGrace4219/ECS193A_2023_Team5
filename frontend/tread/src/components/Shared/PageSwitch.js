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
                <button onClick = {moveCurrentChallenge}>Current</button>
                <button onClick = {moveWeeklyChallenge}>Global</button>
            </div>
            :
            <></>
        }
        {  props.type === "social" ?
            <div id ="PageSwitch">
                <button onClick = {moveSocialFriend}>Friend</button>
                <button onClick = {moveSocialLeague}>League</button>
            </div>
            :
            <></>
        }
        {  props.type === "profile" ?
            <div id ="PageSwitch">
                <button onClick = {moveProfileStats}>Stats</button>
                <button onClick = {moveProfileMedals}>Medals</button>
            </div>
            :
            <></>
        }
        </div>


    )
}

export default PageSwitch;