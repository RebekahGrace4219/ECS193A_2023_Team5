import "../../css/Challenge/CurrentSwitch.css"

const CurrentSwitch = () => {
    function moveCurrentPage(){
        console.log("Move to current page");
        window.location.href = "/currentChallengePage";
    }

    function moveWeeklyPage(){
        console.log("Move to weekly page");
        window.location.href = "/weeklyChallengePage";
    }
    return (<div id = "CurrentSwitch">
        <button id = "currentButton" className = "switchButton" onClick = {moveCurrentPage}>C</button>
        <button id = "weeklyButton" className = "switchButton" onClick = {moveWeeklyPage}>W</button>
    </div>);
}

export default CurrentSwitch;