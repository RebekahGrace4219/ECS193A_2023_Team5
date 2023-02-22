
import SensorObj from './SensorObj';
import Line from '../Shared/Line';
import "../../css/Shared/shared.css";
const SensorSection = () => {
    return (
        <div id = "SensorSection">
            <h2>Sensors</h2>
            <SensorObj title = "AppleWatch" lastSync = "01/26/2001 3:56 am"></SensorObj>
            <SensorObj title = "FitBit" lastSync = "10/19/2001 04:59 pm"></SensorObj>
            <Line></Line>
        </div>
    )
}

export default SensorSection;