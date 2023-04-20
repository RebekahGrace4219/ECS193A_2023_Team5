import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "../css/Shared/page3.css";
import ExerciseLog from "../../src/classes/ExerciseLog";
import Challenge from "../../src/classes/Challenge";
const backend_url = process.env.REACT_APP_PROD_BACKEND;
const TestDiv = () => {
    const [load, setLoad] = useState(false);
    const [exerciseLog, setExerciseLog] = useState([]);
    const [reducedExerciseLog, setReducedExerciseLog] = useState({});
    const [exerciseList, setExerciseList] = useState();
    const [challengeLog, setChallengeLog] = useState([]);


    useEffect(() => {
        if(!load){
            requestChallenges();
            requestExercises();
        }
    }, [load]);



    const updateReducedExerciseList = (newItem, reducedExerciseList) => {

    }
    const reduceExercises = (exerciseList) => {
        console.log(exerciseList);
        let reducedExerciseList =  {}

        exerciseList.forEach((newItem) => {
            if (!(newItem.exercise.exerciseName in reducedExerciseList)){
                // Add the exercise Info
                reducedExerciseList[newItem.exercise.exerciseName] = Set();
            }
            reducedExerciseList[newItem.exercise.exerciseName].add(newItem.exercise.unitType);
        });

        setReducedExerciseLog(reducedExerciseList);
        setExerciseList(reducedExerciseList.keySet());
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
            setExerciseLog(response.data.map((item) => {return new ExerciseLog(item)}));
            reduceExercises(response.data);
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

    const determineExercises = () => {
        // Convert the exercise log values into
        //(exercise, amount, unit)
    }


    return(
        <div>
            <select>
                exerciseList.map(ExerciseChoices);
            </select>

            <select>
                unitChoices.map(UnitObject);
            </select>


        </div>
    );
}

export default TestDiv;