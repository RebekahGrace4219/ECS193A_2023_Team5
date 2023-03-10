import {useState, useEffect} from 'react';

import IssuedChallengeObj from "./IssuedChallengeObj";
import SentChallengeObj from "./SentChallengeObj";
import WeeklyChallengeObj from "./WeeklyChallengeObj";
import ReceivedChallengeObj from "./ReceivedChallengeObj";
import AddChallengeButton from "./AddChallengeButton";

import axios from "axios";

import "../../css/Challenge/challenge.css";

const backend_url = process.env.REACT_APP_PROD_BACKEND;

const ChallengeScroll = (props) => {
    let [scrollType] = useState(props.type);
    let [leagueID] = useState(props.leagueID);
    let [ifLeague] = useState(props.ifLeague);
    let [information, setInformation] = useState([]);

    function getIssuedFriend(){
        var config = {
            method : 'post',
            url : backend_url + 'challenges/accepted_challenges',
            headers: {
            Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
        };
        axios(config)
        .then(function(response){

            console.log("Issued, " , response.data);
            setInformation(response.data);
        })
        .catch(function(error){
            console.log(error)
        });
    }


    function getIssuedLeague(){
        var config = {
            method : 'post',
            url : backend_url + 'challenges/league_challenges',
            headers: {
            Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
            data:{
                leagueID: leagueID
            }
        };
        axios(config)
        .then(function(response){

            console.log(response);
            setInformation(response.data);
        })
        .catch(function(error){
            console.log(error)
        });
    }

    function getSent(){
        var config = {
            method : 'post',
            url : backend_url + 'challenges/sent_challenges',
            headers: {
            Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
        };
        axios(config)
        .then(function(response){

            console.log(response.data);
            setInformation(response.data);
        })
        .catch(function(error){
            console.log(error)
        });


    }

    function getReceived(){
        var config = {
            method : 'post',
            url : backend_url + 'challenges/received_challenges',
            headers: {
            Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
        };
        axios(config)
        .then(function(response){
            console.log(response.data);
            setInformation(response.data);
        })
        .catch(function(error){
            console.log(error)
        });

    }
    function getWeekly(){
        var config = {
            method : 'post',
            url : backend_url + 'global_challenge/get_challenges',
            headers: {
            Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
        };
        axios(config)
        .then(function(response){
            console.log("Weekly", response.data);
            setInformation(response.data);
        })
        .catch(function(error){
            console.log(error)
        });

    }
    function getUsername(){
        //TODO
        return "Bruce Wayne";
    }
    function makeIssuedChallengeObj(input){
        return (<IssuedChallengeObj>{input}</IssuedChallengeObj>);
    }

    function makeSentChallengeObj(input){
        return (<SentChallengeObj>{input}</SentChallengeObj>);
    }

    function makeReceivedChallengeObj(input){
        return (<ReceivedChallengeObj>{input}</ReceivedChallengeObj>);
    }

    function makeWeeklyChallengeObj(input){
        return (<WeeklyChallengeObj>{input}</WeeklyChallengeObj>);
    }

    useEffect (
        () => {
            if(scrollType === "issued" && ifLeague){
                getIssuedLeague();
            }
            else if(scrollType === "issued" && !ifLeague){
                getIssuedFriend();
            }
            else if(scrollType === "sent"){
                getSent();
            }
            else if(scrollType === "received"){
                getReceived();
            }
            else if(scrollType === "weekly"){
                getWeekly();
            }
        }, [scrollType]
    );

    return (<div id = "ChallengeScroll">
        {(scrollType === "issued") ? information.map(makeIssuedChallengeObj) : <></>}
        {(scrollType === "issued" && !ifLeague) ? <AddChallengeButton></AddChallengeButton> : <></>}
        {(scrollType === "sent") ? information.map(makeSentChallengeObj) : <></>}
        {(scrollType === "received") ? information.map(makeReceivedChallengeObj) : <></>}
        {(scrollType === "weekly") ? information.map(makeWeeklyChallengeObj) : <></>}
    </div>);
}

export default ChallengeScroll;