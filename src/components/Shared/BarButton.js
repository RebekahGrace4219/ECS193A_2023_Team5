import '../../css/Shared/button.css';

const BarButton = (props) => {
    return (<button id = {props.name} onClick = {props.function} className = "barButton">{props.name}</button>);
}
export default BarButton;