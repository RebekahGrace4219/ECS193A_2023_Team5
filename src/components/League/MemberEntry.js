import MemberSelect from "./MemberSelect";
import "../../css/Shared/ProfileSmall.css";
const MemberEntry = (props) => {
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
    }
    return(
        <div>
            <div>
                <img className = "smallProfilePicture" src = {props.children.photo} />
            </div>
            <div>
                <p>{props.children.displayName}</p>
                <p>{props.children.username}</p>
            </div>
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
                <MemberSelect memberReact = {reactionFunction} selfType = {props.selfType} userType = {props.children.userType}></MemberSelect>
            </div>
        </div>
    )
}

export default MemberEntry;