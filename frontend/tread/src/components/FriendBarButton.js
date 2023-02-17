import '../css/FriendBarButton.css'

const FriendBarButton = (props) => {
    return (<button onClick = {props.function} className = "FriendBarButton">{props.name}</button>);
}
export default FriendBarButton;