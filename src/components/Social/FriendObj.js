import {useState} from 'react';
import FriendSelect from "./FriendSelect";
import SentSelect from "./SentSelect";
import ReceivedSelect from "./ReceivedSelect";
import BlockedSelect from "./BlockedSelect";
import "../../css/Social/obj.css";
import "../../css/Shared/button.css";
const FriendObj = (props) => {
    const [selectShow, setSelectShow] = useState();
    let type = props.type;

    function toggleSelectShow(){
        setSelectShow(!selectShow);
    }

    function unfriend(){
        console.log("Unfriend this person");
    }

    function block(){
        console.log("Block this person");
    }

    function revoke(){
        console.log("Revoke sent request");
    }

    function unblock(){
        console.log("Unblock this person");
    }

    function accept(){
        console.log("Accept received request");
    }

    function decline(){
        console.log("Decline received request");
    }

    function friendReact(value){
        if(value === "unfriend"){
            unfriend();
        }
        else if(value === "block"){
            block();
        }
        else if(value === "revoke"){
            revoke();
        }
        else if(value === "unblock"){
            unblock();
        }
        else if (value === "accept"){
            accept();
        }
        else if (value === "decline"){
            decline();
        }
    }
    return(
        <div id = "FriendObj" className = "displayObj">
            <div className = "objSection">
                <img className = "friendProfilePhoto" src = {props.children.profilePicture}/>
            </div>
            <div className = "objSection objWritingSection">
                <p className = "objDisplayName">{props.children.displayName}</p>
                <p className = "objUsername">{props.children.username}</p>
            </div>
            <div className = "objSection">
                <button className = "moreInfoButton" onClick = {toggleSelectShow}>
                    <img src = "https://i.imgur.com/pnzihUp.png"/>
                </button>
                {(selectShow && type === "friend") ? <FriendSelect friendReact = {friendReact}></FriendSelect>: <></>}
                {(selectShow && type === "sent") ? <SentSelect friendReact = {friendReact}></SentSelect>: <></>}
                {(selectShow && type === "received") ? <ReceivedSelect friendReact = {friendReact}></ReceivedSelect>: <></>}
                {(selectShow && type === "blocked") ? <BlockedSelect friendReact = {friendReact}></BlockedSelect>: <></>}
            </div>
        </div>
    )

}

export default FriendObj;