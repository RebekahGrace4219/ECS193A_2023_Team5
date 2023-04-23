import {useState, useEffect} from 'react';
import Line from "../Shared/Line";
import axios from 'axios';
import ExerciseNameForm from "../Shared/ExerciseNameForm";
import ExericseAmountForm from "../Shared/ExerciseAmountForm";
import ExerciseDateForm from "../Shared/ExerciseDateForm";
import ExerciseReceiverForm from '../Shared/ExerciseReceiverForm';
import '../../css/Shared/form.css';
import '../../css/Shared/button.css';
import { ErrorResponse } from '@remix-run/router';

const backend_url = process.env.REACT_APP_PROD_BACKEND;

const ChallengeForm = () =>{
    const [exerciseName, setExerciseName] = useState("");
    const [unit, setUnit] = useState("ct");
    const [amount, setAmount] = useState(0);
    const [issueDate, setIssueDate] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [receiverGroup, setReceiverGroup] = useState("self");
    const [receiver, setReceiver] = useState("");
    const [submitError, setSubmitError] = useState("");

    const checkValidInputs = () => {
      setSubmitError("");
      let errorMessage = "";
      if (exerciseName === ""){
        errorMessage += "Please give an exercise name.\n";
      }

      if(amount <= 0){
        errorMessage += "Please give an amount over zero.\n";
      }

      if(issueDate === ""){
        errorMessage += "Please give a valid issue date.\n";
      }

      if(dueDate === ""){
        errorMessage += "Please give a valid due date.\n";
      }

      if(receiverGroup !== "self" && receiver === ""){
        errorMessage += "Please select a recipient for your challenge.\n";
      }

      setSubmitError(errorMessage);
      return (errorMessage === "");
    }

    const submitChallenge = () => {

        //TODO
        if (!checkValidInputs()){
          return false;
        }


        let recipient = receiver
        if (receiverGroup === "league"){
          recipient = receiver.split('-')[1].trim();
        }

        var config ={
          method : 'post',
          url : backend_url+"challenges/add_"+receiverGroup+"_challenge",
          headers: {
            Accept: 'application/json',
          },
          withCredentials: true,
          credentials: 'include',
          data :
          {
            receivedUser : recipient,
            issueDate : issueDate,
            dueDate : dueDate,
            unit : unit,
            amount : amount,
            exerciseName : exerciseName,
          }
        };
        axios(config)
        .then(function(response){
          window.location.href = "./currentChallengePage";
        })
        .catch(function(error){
            if(error.response.status===401){
                window.location.href = "/loginPage";
            }
          setSubmitError("Error in issuing challenge");
          console.log(error)
        })

    }

    return (
        <div id = "ChallengeForm" className = "Form">
            <h1>Challenges</h1>
            <h2>Create a Challenge</h2>
            <Line/>

            <ExerciseNameForm updateExerciseName = {setExerciseName}/>
            <ExericseAmountForm updateAmount = {setAmount} updateUnit = {setUnit}/>
            <ExerciseDateForm updateIssueDate = {setIssueDate} updateDueDate = {setDueDate} />
            <ExerciseReceiverForm updateReceiver = {setReceiver} updateReceiverGroup = {setReceiverGroup}/>


            <div className = "formObj">
            <button className="submitButton" onClick = {submitChallenge}><p className = "submitButtonText">Submit</p></button>
            <p className = "errorBox">{submitError}</p>
            </div>

        </div>
    );
}

export default ChallengeForm;
