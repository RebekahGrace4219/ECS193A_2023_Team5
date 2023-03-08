import {useState, useEffect} from 'react';
import MemberEntry from './MemberEntry';
import "../../css/Shared/section.css";
import "../../css/Shared/bar.css";
import MembersBar from './MembersBar';
import axios from "axios";
import MemberAdd from './MemberAdd';
const backend_url = process.env.REACT_APP_PROD_BACKEND;

const LeagueMemberList = (props) => {
    const [id] = useState(props.children.id);
    const [memberScroll, setMemberScroll] = useState("all");
    const [memberList, setMemberList] = useState([]);
    const [load, setLoad] = useState(false);
    const [selfType, setSelfType] = useState("");

    function getAll(){
        var config = {
            method : 'post',
            url : backend_url + 'league/get_member_list',
            headers: {
            Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
            data:{
                leagueID: id
            }
        };
        axios(config)
        .then(function(response){
            console.log("All", response.data);
            setMemberList(response.data);
        })
        .catch(function(error){
            console.log(error)
        });

    }

    function getRequesting(){
        var config = {
            method : 'post',
            url : backend_url + 'league/get_pending_request_list',
            headers: {
            Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
            data:{
                leagueID: id
            }
        };
        axios(config)
        .then(function(response){

            console.log("Request", response.data);
            setMemberList(response.data);
        })
        .catch(function(error){
            console.log(error)
        });
    }
    function getBanned(){
        // get list from service
        var config = {
            method : 'post',
            url : backend_url + 'league/get_banned_list',
            headers: {
            Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
            data:{
                leagueID: id
            }
        };
        axios(config)
        .then(function(response){

            console.log("Banned", response.data);
            setMemberList(response.data);
        })
        .catch(function(error){
            console.log(error)
        });
    }
    function getInvited(){
        // get list from service
        var config = {
            method : 'post',
            url : backend_url + 'league/get_sent_invite_list',
            headers: {
            Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
            data:{
                leagueID: id
            }
        };
        axios(config)
        .then(function(response){

            console.log("Invited", response.data);
            setMemberList(response.data);
        })
        .catch(function(error){
            console.log(error)
        });
    }

    function getSelfType(){
        var config = {
            method : 'post',
            url : backend_url + 'league/get_role',
            headers: {
            Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
            data:{
                leagueID: id
            }
        };
        axios(config)
        .then(function(response){
            setSelfType(response.data);
        })
        .catch(function(error){
            console.log(error)
        });
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
            {
                (memberScroll === "addUser" && (selfType === "admin" || selfType === "owner")) ? <MemberAdd leagueID = {id}></MemberAdd>:<></>}
        </div>
    )
}

export default LeagueMemberList;