import IssuedChallengeObj from "./IssuedChallengeObj";
import SentChallengeObj from "./SentChallengeObj";
import WeeklyChallengeObj from "./WeeklyChallengeObj";
import ReceivedChallengeObj from "./ReceivedChallengeObj";
import {useState, useEffect} from 'react';
import AddChallengeButton from "./AddChallengeButton";

const ChallengeScroll = (props) => {
    let [scrollType] = useState(props.type);
    let [information, setInformation] = useState([]);

    function getIssued(){
        //TODO
        setInformation([
            {"progress":{"Bruce Wayne":10, "Diana Prince":40, "Clark Kent":60},
            "exerciseType":"Run",
            "unit":"km",
            "count":10,
            "dueDate":"2023-03-10",
            "username":"Bruce Wayne",
            "photos":{
                "Bruce Wayne": "https://i.imgur.com/E2x8xyY.png",
                "Clark Kent": "https://i.imgur.com/q3vP5BH.png",
                "Diana Prince":"https://i.imgur.com/3Ia9gVG.png"},
            "sentUser": "Clark Kent",
            "receivedUser": "Justice Leauge",
            "type": "league"}]);
    }

    function getSent(){
            //TODO
        setInformation([
            {"progress":{"Bruce Wayne":10, "Diana Prince":40, "Clark Kent":60},
            "exerciseType":"Run",
            "unit":"km",
            "count":10,
            "dueDate":"2023-03-10",
            "username":"Bruce Wayne",
            "photos":{
                "Bruce Wayne": "https://i.imgur.com/E2x8xyY.png",
                "Clark Kent": "https://i.imgur.com/q3vP5BH.png",
                "Diana Prince":"https://i.imgur.com/3Ia9gVG.png"},
            "sentUser": "Clark Kent",
            "receivedUser": "Justice Leauge",
            "type": "league"}]);
    }

    function getReceived(){
            //TODO
        setInformation([
            {"progress":{"Bruce Wayne":10, "Diana Prince":40, "Clark Kent":60},
            "exerciseType":"Run",
            "unit":"km",
            "count":10,
            "dueDate":"2023-03-10",
            "username":"Bruce Wayne",
            "photos":{
                "Bruce Wayne": "https://i.imgur.com/E2x8xyY.png",
                "Clark Kent": "https://i.imgur.com/q3vP5BH.png",
                "Diana Prince":"https://i.imgur.com/3Ia9gVG.png"},
            "sentUser": "Clark Kent",
            "receivedUser": "Justice Leauge",
            "type": "league"}]);

    }
    function getWeekly(){
        //TODO
    setInformation([
        {"progress":{"Bruce Wayne":10, "Diana Prince":40, "Clark Kent":60},
        "exerciseType":"Run",
        "unit":"km",
        "count":10,
        "dueDate":"2023-03-10",
        "username":"Bruce Wayne",
        "photos":{
            "Bruce Wayne": "https://i.imgur.com/E2x8xyY.png",
            "Clark Kent": "https://i.imgur.com/q3vP5BH.png",
            "Diana Prince":"https://i.imgur.com/3Ia9gVG.png"},
        "sentUser": "Clark Kent",
        "receivedUser": "Justice Leauge",
        "type": "league"}]);

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
            if(scrollType === "issued"){
                getIssued();
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
        {(scrollType === "issued") ? information.map(makeIssuedChallengeObj): <></>}
        {(scrollType === "issued") ? <AddChallengeButton></AddChallengeButton>: <></>}
        {(scrollType === "sent") ? information.map(makeSentChallengeObj): <></>}
        {(scrollType === "received") ? information.map(makeReceivedChallengeObj): <></>}
        {(scrollType === "weekly") ? information.map(makeWeeklyChallengeObj): <></>}
    </div>);
}

export default ChallengeScroll;