import {useState, useEffect} from "react";
import ExerciseDateForm from "../components/Shared/Form/ExerciseDateForm";
const TestDiv = () => {
    const [defaultIssueDate, setDefaultIssueDate] = useState("");
    const [defaultDueDate, setDefaultDueDate] = useState("");
    const [issueDate, setIssueDate] = useState("");
    const [dueDate, setDueDate] = useState("");

    useEffect (
        () => {
            if(issueDate){
                console.log("New issue date", new Date(issueDate).toISOString().substring(0, 10));
            }
        }, [issueDate]

    );

    useEffect (
        () => {
            if(dueDate){
                console.log("New due date", new Date(dueDate).toISOString().substring(0, 10));
            }
        }, [dueDate]

    );

    return (<div>
    <ExerciseDateForm defaultIssueDate = {defaultIssueDate} defaultDueDate =  {defaultDueDate} updateIssueDate = {setIssueDate} updateDueDate = {setDueDate}></ExerciseDateForm></div>)
}

export default TestDiv;