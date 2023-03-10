import '../../css/Shared/button.css'

const BarButton = (props) => {
    return (<button onClick = {props.function} className = "barButton">{props.name}</button>);
}
export default BarButton;