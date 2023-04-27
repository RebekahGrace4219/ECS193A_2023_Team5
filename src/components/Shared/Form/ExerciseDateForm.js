import {useState, useEffect} from "react";

const ExerciseDateForm = (props) => {
    const [issueDate, setIssueDate] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [dueDateError, setDueDateError] = useState("");


    useEffect (
        () => {
            if(props.defaultIssueDate){
                document.getElementById("issueDateInput").value = new Date(props.defaultIssueDate).toISOString().substring(0,10);
            }
        }, [props.defaultIssueDate]
    );

    useEffect (
        () => {
            if(props.defaultDueDate){
                document.getElementById("dueDateInput").value = new Date(props.defaultDueDate).toISOString().substring(0,10);
            }
        }, [props.defaultDueDate]
    );

    const issueDateChange = (event) => {
        setIssueDate(event.target.value)
        props.updateIssueDate(new Date(event.target.value));
        dueDateCheck(dueDate)
    }

    const dueDateChange = (event) => {
        dueDateCheck(event.target.value);
    }

    const dueDateCheck = (targetDueDate) => {
        if (targetDueDate < issueDate){
            setDueDateError("The due date needs to be after the start date.");
            props.updateDueDate("");
            setDueDate("");
            return;
        }
        setDueDateError("");
        setDueDate(targetDueDate);
        props.updateDueDate(new Date(targetDueDate));
    }

    function getToday(){
        let date_ob = new Date()

        let date = ("0" + date_ob.getDate()).slice(-2);
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        let year = date_ob.getFullYear();

        return (year + "-" + month + "-" + date);
    }

    return (
        <div>
            <div className="formObj">
                <p className="formObjInner">Issue Date</p>
                <input id="issueDateInput" className="formDateInput" type="date" min={getToday()} onChange={issueDateChange}></input>
            </div>

            <div className="formObj">
                <p className="formObjInner">Due Date</p>
                <input id="dueDateInput" className="formDateInput" type="date" min={getToday()} onChange={dueDateChange}></input>
                <p className="errorBox">{dueDateError}</p>
            </div>
        </div>);
}

export default ExerciseDateForm;