import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "../../css/Shared/page3.css";
import ExerciseLog from "../../../src/classes/ExerciseLog";
import Challenge from "../../../src/classes/Challenge";
const backend_url = process.env.REACT_APP_PROD_BACKEND;
const StatsSection = () => {
    const [load, setLoad] = useState(false);
    const [exerciseLog, setExerciseLog] = useState([]);
    const [reducedExerciseLog, setReducedExerciseLog] = useState({});
    const [exerciseList, setExerciseList] = useState([]);
    const [challengeLog, setChallengeLog] = useState([]);
    const [unitOptions, setUnitOptions] = useState([]);

    useEffect(() => {
        if(!load){
            requestChallenges();
            requestExercises();
        }
    }, [load]);

    const setDefaultOptions = (reducedExerciseList) => {
        let list = Object.keys(reducedExerciseList);
        setExerciseList(list);
        setUnitOptions(Array.from(reducedExerciseLog[list[0]]))
    }
    const reduceExercises = (exerciseList) => {
        console.log(exerciseList);
        let reducedExerciseList =  {}

        exerciseList.forEach((newItem) => {
            if (!(newItem.exercise.exerciseName in reducedExerciseList)){
                // Add the exercise Info
                reducedExerciseList[newItem.exercise.exerciseName] = new Set();
            }
            reducedExerciseList[newItem.exercise.exerciseName].add(newItem.exercise.unitType);
        });

        setReducedExerciseLog(reducedExerciseList);
        setDefaultOptions(reducedExerciseList);

    }

    const requestExercises = () => {
        var config = {
            method : 'post',
            url : backend_url + 'stats/get_exercise_log',
            headers: {
              Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include'
          };
          axios(config)
          .then(function(response){
            console.log("start in exercises");
            setExerciseLog(response.data.map((item) => {return new ExerciseLog(item)}));
            console.log("set exercise log");
            reduceExercises(response.data);
            console.log("finished exercies");
          })
          .catch(function(error){
            console.log("error");
            console.log(error);
            if(error.response.status===401){
              window.location.href = "/loginPage";
          }
          });

    }

    const requestChallenges = () => {
        var config = {
            method : 'post',
            url : backend_url + 'stats/get_past_challenges',
            headers: {
              Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include'
          };
          axios(config)
          .then(function(response){
            setChallengeLog(response.data.map((item) => {return new Challenge(item)}));

          })
          .catch(function(error){
            if(error.response.status===401){
              window.location.href = "/loginPage";
          }
          });
    }

    const updateOptions = (event) => {
        let value = event.target.value;
        setUnitOptions(Array.from(reducedExerciseLog[value]));

        updateGraph();

    }

    const updateGraph = () => {
        /*const labels = Utils.months({count: 7});
        const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
        };*/
    }


    return(
        <div>
            <select onChange = {updateOptions}>
                <option value = "Exercise">Exercise</option>
                {exerciseList.map((item) => {return <option value = {item}>{item}</option>})}
            </select>

            <select onChange = {updateGraph}>
                <option value = "Unit">Unit</option>
                {unitOptions.map((item) => {return <option value = {item}>{item}</option>})}
            </select>


        </div>
    );
}

export default StatsSection;