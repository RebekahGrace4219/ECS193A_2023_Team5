import BarButton from "../../Shared/BarButton";
import "../../css/Shared/shared.css"
const ChallengeSelectBar = (props) => {
    return (
        <div id = "ChallengeSelectBar" className="selectBar">
            <BarButton name = "Issued" function = {props.children.issuedButton}></BarButton>
            <BarButton name = "Sent" function = {props.children.sentButton}></BarButton>
            <BarButton name = "Incoming" function = {props.children.incomingButton}></BarButton>
        </div>
    );
}


export default ChallengeSelectBar;