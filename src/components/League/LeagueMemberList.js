import {useState} from 'react';
import MemberEntry from './MemberEntry';
import "../../css/Shared/section.css";
import "../../css/Shared/bar.css";
import MembersBar from './MembersBar';
const LeagueMemberList = (props) => {
    let id = props.children.id;
    const [member, setMember] = useState("all");
    const [memberList] = useState(getMemberList());
    const [selfType] = useState(getSelfType());
    function getMemberList(){
        // get list from service
        return [
            {"username": "Person 1", "displayName": "Person 1" , "userType": "owner", "photo": "https://i.imgur.com/q3vP5BH.png"},
            {"username": "Person 2", "displayName": "Person 2" , "userType": "admin", "photo": "https://i.imgur.com/q3vP5BH.png"},
            {"username": "Person 3", "displayName": "Person 3" , "userType": "admin", "photo": "https://i.imgur.com/q3vP5BH.png"},
            {"username": "Person 4", "displayName": "Person 4" , "userType": "participant", "photo": "https://i.imgur.com/q3vP5BH.png"},
            {"username": "Person 5", "displayName": "Person 5" , "userType": "participant", "photo": "https://i.imgur.com/q3vP5BH.png"},

        ];
    }

    function getSelfType(){
        // get from server
        return "owner";
    }

    function makeMemberEntryObj(input, index){
        if (index === 0){
            return(<div><MemberEntry selfType = {selfType}>{input}</MemberEntry></div>);
        }
        else {
            return(<div><div className = "memberLine"></div><MemberEntry scrollType = {member} selfType = {selfType}>{input}</MemberEntry></div>);
        }
    }


    return(
        <div className = "leagueMemberHeader section">
            <div className ="selectButtonHeader">
                <h1>Members</h1>
                <MembersBar changeFunction = {setMember}></MembersBar>
            </div>

            {
                (member === "all") ? <div id = "LeagueMemberList">{memberList.map(makeMemberEntryObj)}</div> : <></>
            }
            {
                (member === "pending") ? <div id = "LeagueMemberList">{memberList.map(makeMemberEntryObj)}</div> : <></>
            }
            {
                (member === "banned") ? <div id = "LeagueMemberList">{memberList.map(makeMemberEntryObj)}</div> : <></>
            }

        </div>
    )
}

export default LeagueMemberList;