import FriendObj from './FriendObj'
import '../css/friendSection.css'
const FriendSection = (props) => {
    return (
    <div className = "FriendSection">
        {props.friends.map((name) => {
            return (<FriendObj>{name}</FriendObj>);})}
    </div>);
}

export default FriendSection;