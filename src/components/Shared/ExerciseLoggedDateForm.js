const ExerciseLoggedDateForm = () => {
    const loggedDateChange = (event) => {
        let date = event.target.value;
    }
    return (
        <div className="horizontalForm">
            <p lassName="formObjInner">Date</p>
            <input className="formDateInput" id="addExerciseDate" type="date" onChange={loggedDateChange}></input>
        </div>
    )
}

export default ExerciseLoggedDateForm;