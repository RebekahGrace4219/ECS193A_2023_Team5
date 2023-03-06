import MemberSelect from "./MemberSelect";
import "../../css/Shared/ProfileSmall.css";
import {useState} from 'react';
import "../../css/League/member.css";
const MemberEntry = (props) => {
    const [selectShow, setSelectShow] = useState();
    console.log("member entry", props);
    function addFriend(){
        // todo
    }

    function block(){
        //todo
    }

    function kickOut(){
        // todo
    }

    function ban(){
        //ban
    }

    function removeAdmin(){
        //todo
    }

    function addAdmin(){

    }

    function accept(){

    }

    function decline(){

    }

    function unban(){

    }

    function reactionFunction(input){
        let reaction = input.target.value;

        if (reaction === "friend"){
            addFriend();
        }
        else if(reaction === "block"){
            block();
        }
        else if(reaction === "kick"){
            kickOut();
        }
        else if(reaction === "ban"){
            ban();
        }
        else if(reaction === "removeAdmin"){
            removeAdmin();
        }
        else if(reaction === "addAdmin"){
            addAdmin();
        }
        else if(reaction === "accept"){
            accept();
        }
        else if(reaction === "decline"){
            decline();
        }
        else if(reaction === "unban"){
            unban();
        }
    }

    function toggleSelectShow(){
        setSelectShow(!selectShow);
    }

    return(
        <div className = "memberEntry">
            <div className = "memberEntryLeft">
                <div>
                    <img className = "memberPicture" src = {props.children.photo} />
                </div>
                <div class = "memberNames">
                    <p className = "memberDisplayName memberEntryText">{props.children.displayName}</p>
                    <p className = "memberUsername memberEntryText">{props.children.username}</p>
                </div>
            </div>
            <div className = "memberEntryRight">


            <div>
                {(props.children.userType === "admin" || props.children.userType === "owner") ?
                <img src = "https://i.imgur.com/551l8WX.png" alt = "key"/>
                :
                <></>
                }
            </div>
                <div>
                {(props.children.userType === "owner") ?
                <img src = "https://i.imgur.com/FuiEy2B.png" alt = "crown"/>
                :
                <></>
                }
            </div>

            <div>
                <button className = "moreInfoButton" onClick = {toggleSelectShow}>
                    <img src = "https://i.imgur.com/pnzihUp.png"/>
                </button>
                {(selectShow) ? <MemberSelect memberReact = {reactionFunction} scrollType = {props.scrollType} selfType = {props.selfType} userType = {props.children.userType}></MemberSelect>: <></>}
            </div>
            </div>

        </div>


    )
}

export default MemberEntry;