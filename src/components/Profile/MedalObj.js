import "../../css/Profile/medalObj.css";

let calculateProgress = (progress, goalUnit) => {
    // Turn the progress in base units to this unit

    let conversionKey = {
        "ct":1,
        "m":1,
        "km":(1/1000),
        "ft": 3.28084,
        "yd": 1.0936133333333,
        "mi": 0.00062137121212119323429,
        "s": 60,
        "min": 1,
        "hr": (1/60)
    }

    return progress*conversionKey[goalUnit];
}

const min = (a, b) => {
    if (a < b){
        return a;
    }
    return b;
}
const MedalObj = (props) => {

    let convertedProgress = min(calculateProgress(props.children.progress, props.children.exercise.unit), props.children.exercise.amount);
    console.log("Medal gets", props.children);
    /*
    <a href="https://www.flaticon.com/free-icons/silver-cup" title="silver cup icons">Silver cup icons created by Freepik - Flaticon</a>*/
    return(
        <div id = "MedalObj">
            <div className = "medalLeft">
                <div>
                    {props.children.level === 3 ? <img  className = "medalsItem" src = "https://i.imgur.com/o2XvWn9.png"></img> : <></>}
                    {props.children.level === 2 ? <img  className = "medalsItem" src = "https://i.imgur.com/72N0DMU.png"></img> : <></>}
                    {props.children.level === 1 ? <img  className = "medalsItem" src = "https://i.imgur.com/iCqnM41.png"></img> : <></>}
                </div>
                <div>
                    <p className = "medalsItem medalsText">{props.children.exercise.exerciseName + " " + props.children.exercise.amount + " " + props.children.exercise.unit}</p>
                </div>
            </div>

            <div className = "medalRight">
                <p className = "medalsItem medalsText">Progress : {convertedProgress}/{props.children.exercise.amount} {props.children.exercise.unit}</p>

            </div>
        </div>
    )
}

export default MedalObj;