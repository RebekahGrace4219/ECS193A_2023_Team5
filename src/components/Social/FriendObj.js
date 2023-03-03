import {useState} from 'react';
import FriendSelect from "./FriendSelect";
import SentSelect from "./SentSelect";
import ReceivedSelect from "./ReceivedSelect";
import BlockedSelect from "./BlockedSelect";

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
        <div id = "FriendObj">
            <div>
                <img src = {props.children.profilePhoto}/>
            </div>
            <div>
                <p>{props.children.displayName}</p>
                <p>{props.children.username}</p>
            </div>
            <div>
                <button onClick = {toggleSelectShow}>
                    <img src = ""/>
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