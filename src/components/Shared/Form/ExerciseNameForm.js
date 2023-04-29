import {useState, useEffect} from "react";
import hardCodedInfo from "../../../Helpers/SharedHardCodeInfo.json";
import { setDisplayProperty } from "../../../Helpers/CssEffects";

let sportList = hardCodedInfo.sportList;

const ExerciseNameForm = (props) => {
    const [selfSpecify, setSelfSpecify] = useState(false);
    const [specifyError, setSpecifyError] = useState(false);

    useEffect (
        () => {
            if(props.defaultExerciseName){
                console.log(props.defaultExerciseName);
                if (sportList.includes(props.defaultExerciseName)){
                    setSelfSpecify(false);
                    setSpecifyError("");
                    document.getElementById("AddChallengeExerciseNameSelect").value = props.defaultExerciseName;
                    document.getElementById("AddChallengeSelfSpecifyExerciseName").setAttribute("value", "")
                }
                else{
                    setSelfSpecify(true);
                    setSpecifyError("");
                    document.getElementById("AddChallengeExerciseNameSelect").value = "Other (Specify Below)";
                    document.getElementById("AddChallengeSelfSpecifyExerciseName").setAttribute("value", props.defaultExerciseName);

                }
            }
        }, [props.defaultExerciseName]
    );

    useEffect (
        () => {
            if(selfSpecify){
                setDisplayProperty("SpecifyElement", "block");
            }
            else{
                setDisplayProperty("SpecifyElement", "none");
            }
        }, [selfSpecify]
    );

    function sportChange(event){
        setSelfSpecify((event.target.value === "Other (Specify Below)"));
        setSpecifyError("");

        if (event.target.value !== "Other (Specify Below)"){
            props.updateExerciseName(event.target.value);
        }
        else{
            props.updateExerciseName("");
        }

    }

    function checkMatch(string1, string2){
        let regexPattern = /[^A-Za-z]/g;
        let newString1 = string1.replace(regexPattern, "");
        let newString2 = string2.replace(regexPattern, "");

        return (newString1.toUpperCase() === newString2.toUpperCase());
    }

    function selfSpecifyChange(event){
        let selfEntry = event.target.value;

        if (selfEntry.length === 0 || selfEntry.length > 32){
            setSpecifyError("The sport object should be 1-32 characters");
            props.updateExerciseName("");
            return false;
        }

        sportList.forEach((item) => {
            if( checkMatch(item, selfEntry)){
                selfEntry = item;
            }
        });

        setSpecifyError("");
        props.updateExerciseName(event.target.value);
    }


    return (
        <div>
            <div className = "formObj">
                <p className = "formObjInner">Exercise Type:</p>
                <div className = "formObjInner">
                    <select id = "AddChallengeExerciseNameSelect" className = "formSelect" onChange = {sportChange} defaultValue = "none">
                    <option value="none" disabled hidden></option>
                        {sportList.map((name)=>{return <option value = {name} key = {name}>{name}</option>;})}
                    </select>
                </div>

            </div>


            <div id = "SpecifyElement" className="formObj">
                <p className = "formObjInner">Specify your own activity: </p>
                <input id = "AddChallengeSelfSpecifyExerciseName" className = "formTextInput" type = "text" onChange = {selfSpecifyChange}/>
                <p className = "errorBox">{specifyError}</p>
            </div>

        </div>
    );
}

export default ExerciseNameForm;