import React, {useState} from 'react';
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
import "../css/Shared/page3.css"

const TestDiv = () => {
    const [exerciseLog, setExerciseLog] = useState([]);
    const [challengeLog, setChallengeLog] = useState([]);

    const requestExercises = () => {
        setExerciseLog([]);
    }

    const requestChallenges = () => {
        setChallengeLog([]);
    }

    const determineExercises = () => {
        // Convert the exercise log values into
        //(exercise, amount, unit)
    }


    return(
        <div>

        </div>
    );
}

export default TestDiv;