import {useState} from "react";
import hardCodedInfo from "../../../Helpers/SharedHardCodeInfo.json";

let sportList = hardCodedInfo.sportList;

const ExerciseNameForm = (props) => {
    const [selfSpecify, setSelfSpecify] = useState(false);
    const [specifyError, setSpecifyError] = useState(false);

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

    function selfSpecifyChange(event){
        let selfEntry = event.target.value;

        if (selfEntry.length === 0 || selfEntry.length > 32){
            setSpecifyError("The sport object should be 1-32 characters");
            props.updateExerciseName("");
            return false;
        }

        setSpecifyError("");
        props.updateExerciseName(event.target.value);
    }

    return (
        <div>
            <div className = "formObj">
                <p className = "formObjInner">Exercise Type:</p>
                <div className = "formObjInner">
                    <select className = "formSelect" onChange = {sportChange} defaultValue = "none">
                    <option value="none" disabled hidden></option>
                        {sportList.map((name)=>{return <option value = {name} key = {name}>{name}</option>;})}
                    </select>
                </div>

            </div>

            { selfSpecify ?
                <div className="formObj">
                    <p className = "formObjInner">Specify your own activity: </p>
                    <input className = "formTextInput" type = "text" onChange = {selfSpecifyChange}/>
                    <p className = "errorBox">{specifyError}</p>
                </div>
                :
                <></>
            }
        </div>
    );
}

export default ExerciseNameForm;