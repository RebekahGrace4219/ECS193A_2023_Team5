import {useState, useEffect} from 'react';
import MemberEntry from './MemberEntry';
import "../../css/Shared/section.css";
import "../../css/Shared/bar.css";
import MembersBar from './MembersBar';
const LeagueMemberList = (props) => {
    const [id] = useState(props.children.id);
    const [memberScroll, setMemberScroll] = useState("all");
    const [memberList, setMemberList] = useState([]);
    const [load, setLoad] = useState(false);
    const [selfType, setSelfType] = useState("");
    console.log("here self type is", selfType);
    function getAll(){
        // get list from service
        setMemberList( [
            {"username": "User#6822", "displayName": "Person 1" , "userType": "owner", "photo": "https://i.imgur.com/q3vP5BH.png"},
            {"username": "Kauboy#8925", "displayName": "Person 2" , "userType": "admin", "photo": "https://i.imgur.com/q3vP5BH.png"},
            {"username": "yadda#7651", "displayName": "Person 3" , "userType": "participant", "photo": "https://i.imgur.com/q3vP5BH.png"},

        ]);
    }
    function getRequesting(){
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
    function getInvited(){
        // get list from service
        setMemberList( [
            {"username": "User#6822", "displayName": "Person 1" , "userType": "owner", "photo": "https://i.imgur.com/q3vP5BH.png"},
            {"username": "Kauboy#8925", "displayName": "Person 2" , "userType": "admin", "photo": "https://i.imgur.com/q3vP5BH.png"},
            {"username": "yadda#7651", "displayName": "Person 3" , "userType": "participant", "photo": "https://i.imgur.com/q3vP5BH.png"},

        ]);
    }

    function getSelfType(){
        setSelfType("owner");
    }

    useEffect (
        () => {
            if(!load){
                getSelfType();
            }
        }, [load]
    );

    useEffect (
        () => {
            if(memberScroll === "all"){
                getAll();
            }
            else if(memberScroll === "requesting" && (selfType === "admin" || selfType === "owner")){
                getRequesting();
            }
            else if(memberScroll === "banned" && (selfType === "admin" || selfType === "owner")){
                getBanned();
            }
            else if(memberScroll === "invited" && (selfType === "admin" || selfType === "owner")){
                getInvited();
            }
        }, [memberScroll]
    );

    function makeMemberEntryObj(input, index){
        if (index === 0){
            return(<div><MemberEntry leagueID = {id} scrollType = {memberScroll} selfType = {selfType}>{input}</MemberEntry></div>);
        }
        else {
            return(<div><div className = "memberLine"></div><MemberEntry leagueID = {id} scrollType = {memberScroll} selfType = {selfType}>{input}</MemberEntry></div>);
        }
    }


    return(
        <div className = "leagueMemberHeader">
            <div className ="selectButtonHeader">
                <h1>Members</h1>
                <MembersBar selfType = {selfType} changeFunction = {setMemberScroll}></MembersBar>
            </div>

            {
                (memberScroll === "all") ? <div id = "LeagueMemberList">{memberList.map(makeMemberEntryObj)}</div> : <></>
            }
            {
                (memberScroll === "requesting" && (selfType === "admin" || selfType === "owner")) ? <div id = "LeagueMemberList">{memberList.map(makeMemberEntryObj)}</div> : <></>
            }
            {
                (memberScroll === "banned" && (selfType === "admin" || selfType === "owner")) ? <div id = "LeagueMemberList">{memberList.map(makeMemberEntryObj)}</div> : <></>
            }
            {
                (memberScroll === "invited" && (selfType === "admin" || selfType === "owner")) ? <div id = "LeagueMemberList">{memberList.map(makeMemberEntryObj)}</div> : <></>
            }
        </div>
    )
}

export default LeagueMemberList;