import '../../css/Shared/BarButton.css'

const BarButton = (props) => {
    return (<button onClick = {props.function} className = "BarButton">{props.name}</button>);
}
export default BarButton;