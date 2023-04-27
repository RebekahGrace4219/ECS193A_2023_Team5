import {useState, useEffect} from "react";

const ExerciseAmountForm = (props) => {
    const [amountError, setAmountError] = useState("");
    console.log("defautl Unit" , props.defaultUnit);
    const amountChange = (event) => {
        let targetAmount = event.target.value;

        if (targetAmount <= 0){
            setAmountError("Exercise Amount must be greater than zero");
            props.updateAmount(0);
            return;
        }
        setAmountError("");
        props.updateAmount(targetAmount);
    }

    const unitChange = (event) => {
        props.updateUnit(event.target.value);
    }

    useEffect (
        () => {
            if(props.defaultUnit){
                document.getElementById("addChallengeFormSelect").value = props.defaultUnit;
            }
        }, [props.defaultUnit]
    );

    useEffect (
        () => {
            if(props.defaultAmount){
                setAmountError("");
            }
        }, [props.defaultUnit]
    );


    return (
        <div className="formObj">
            <p className="formObjInner">How much?</p>
            <div className="formObjInner">
                <input className="formTextInput" min = "0" placeholder={props.defaultAmount} type="number" onChange={amountChange} />
                <select id = "addChallengeFormSelect" className="formSelect" onChange={unitChange}>
                    <option value="ct">ct</option>
                    <option value="m">m</option>
                    <option value="km">km</option>
                    <option value="ft">ft</option>
                    <option value="yd">yd</option>
                    <option value="mi">mi</option>
                    <option value="min">min</option>
                    <option value="hr">hr</option>
                </select>
            </div>
            <p className = "errorBox">{amountError}</p>
        </div>
    );
}

export default ExerciseAmountForm;