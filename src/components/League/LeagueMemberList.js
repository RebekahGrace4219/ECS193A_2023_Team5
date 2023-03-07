import {useState, useEffect} from 'react';
import MemberEntry from './MemberEntry';
import "../../css/Shared/section.css";
import "../../css/Shared/bar.css";
import MembersBar from './MembersBar';
const LeagueMemberList = (props) => {
    const [id] = useState(props.children.id);
    const [member, setMember] = useState("all");
    const [memberList, setMemberList] = useState([]);
    const [selfType] = useState(getSelfType());
    function getAll(){
        // get list from service
        setMemberList( [
            {"username": "User#6822", "displayName": "Person 1" , "userType": "owner", "photo": "https://i.imgur.com/q3vP5BH.png"},
            {"username": "Kauboy#8925", "displayName": "Person 2" , "userType": "admin", "photo": "https://i.imgur.com/q3vP5BH.png"},
            {"username": "yadda#7651", "displayName": "Person 3" , "userType": "participant", "photo": "https://i.imgur.com/q3vP5BH.png"},

        ]);
    }
    function getPending(){
        // get list from service
        setMemberList( [
            {"username": "yadda#7651", "displayName": "Person 3" , "userType": "participant", "photo": "https://i.imgur.com/q3vP5BH.png"},

        ]);
    }
    function getBanned(){
        // get list from service
        setMemberList( [
            {"username": "User#6822", "displayName": "Person 1" , "userType": "owner", "photo": "https://i.imgur.com/q3vP5BH.png"},
            {"username": "Kauboy#8925", "displayName": "Person 2" , "userType": "admin", "photo": "https://i.imgur.com/q3vP5BH.png"},
            {"username": "yadda#7651", "displayName": "Person 3" , "userType": "participant", "photo": "https://i.imgur.com/q3vP5BH.png"},

        ]);
    }

    function getSelfType(){
        // get from server
        return "owner";
    }

    useEffect (
        () => {
            if(member === "all"){
                getAll();
            }
            else if(member === "pending"){
                getPending();
            }
            else if(member === "banned"){
                getBanned();
            }
        }, [member]
    );

    function makeMemberEntryObj(input, index){
        if (index === 0){
            return(<div><MemberEntry leagueID = {id} scrollType = {member} selfType = {selfType}>{input}</MemberEntry></div>);
        }
        else {
            return(<div><div className = "memberLine"></div><MemberEntry leagueID = {id} scrollType = {member} selfType = {selfType}>{input}</MemberEntry></div>);
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