import {useState, useEffect} from 'react';
import MedalObj from './MedalObj';
import "../../css/Shared/scroll.css";
import axios from "axios";

const backend_url = process.env.REACT_APP_PROD_BACKEND
const MedalsScroll = (props) => {
    let [type] = useState(props.children.type);
    let [informationMap, setInformationMap] = useState([]);

    function getInProgressMedals(){
        // ask for progress medals
        // move to needed format

        var config = {
            method : 'post',
            url : backend_url + 'medals/get_in_progress',
            headers: {
            Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
        };
        axios(config)
        .then(function(response){
            setInformationMap(response.data)
        })
        .catch(function(error){
            console.log(error)
        });
    }

    function getEarnedMedals(){
        // ask for earned medals
        // move to needed format
        var config = {
            method : 'post',
            url : backend_url + 'medals/get_earned',
            headers: {
            Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
        };
        axios(config)
        .then(function(response){
            setInformationMap(response.data)
        })
        .catch(function(error){
            console.log(error)
        });
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
            getInProgressMedals();
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