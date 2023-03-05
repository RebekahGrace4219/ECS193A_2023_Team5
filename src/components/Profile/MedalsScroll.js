import {useState, useEffect} from 'react';
import MedalObj from './MedalObj';
import "../../css/Shared/scroll.css";
const MedalsScroll = (props) => {
    let [type] = useState(props.children.type);
    let [informationMap, setInformationMap] = useState([]);

    function getProgressMedals(){
        // ask for progress medals
        // move to needed format
        let info = [
            {"description": "Run 100 Miles", "done": 79, "total": 100},
            {"description": "Try 5 types of exercise", "done": 3, "total": 5},
            {"description": "Make a friend", "done": 0, "total": 1},
            {"description": "Swim 5 days in one week", "done": 3, "total": 5},
            {"description": "Join a leauge", "done": 0, "total": 1},
        ]
        setInformationMap(info);
    }

    function getEarnedMedals(){
        // ask for earned medals
        // move to needed format
        let info = [
            {"description": "Complete a Challenge", "date": "09-04-2022"},
            {"description": "Add a sensor", "date": "10-05-2022"},
            {"description": "Try Weighlifting!", "date": "01-12-2022"},
            {"description": "Jog 5 times", "date": "10-31-2022"},
            {"description": "Swim 100 km", "date": "01-26-2022"},
        ];
        setInformationMap(info);
    }


    function createObj(input){
        if(type === "earned"){
            return(<MedalObj date = {input["date"]} description = {input["description"]} ifEarned = {true}></MedalObj>);
        }
        else if(type === "progress"){
            return(<MedalObj done = {input["done"]} total = {input["total"]} description = {input["description"]} ifEarned = {false}></MedalObj>);
        }
    }

    useEffect(
        () => {
          if (type === "earned") {
            getEarnedMedals();
          }
          else if(type === "progress"){
            getProgressMedals();
          }
        }, [type]
      );
    return (
        <div id = "MedalsScroll" className = "scroll">
            {informationMap.map(createObj)}
        </div>
    );
}

export default MedalsScroll;