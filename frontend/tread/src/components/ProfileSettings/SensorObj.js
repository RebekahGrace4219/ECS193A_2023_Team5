import "../../css/ProfileSettings/SensorObj.css"

const SensorObj = (props) => {
    return (
        <div id = "SensorObj">
            <div id = "leftSide">
            <div id = "SensorImage">
                <img src = "https://i.imgur.com/3gMw8LV.png" alt = "sensor"/>
            </div>
            <div id = "SensorText">
                <p className = "SensorTypeText">{props.title}</p>
                <p className = "SensorTypeText">Last synced: {props.lastSync}</p>
            </div>
            </div>
            <div id = "rightSide">
                <button id = "trashCanSensorButton"><img src = "https://i.imgur.com/HKUglem.png" alt = "delete sensor button"/></button>
            </div>
        </div>
    )
}

export default SensorObj;