import {useState, useEffect} from "react";
import axios from 'axios';
const backend_url = process.env.REACT_APP_PROD_BACKEND;
const StatsDownloadSection = () => {
    const [load, setLoad] = useState(false);
    const [ownBlob, setOwnBlob] = useState("");

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
            calculateBlob(response.data);
          })
          .catch(function(error){
            console.log("error");
            console.log(error);
            if(error.response.status===401){
              window.location.href = "/loginPage";
          }
          });

    }

    const calculateBlob = (data) => {
        console.log("data", data[0]);
        let rows = "Date Completed, Date Posted, Exercise, Amount, Unit\n";

        data.forEach((row) =>
        {
            let file = "";
            file += row.loggedDate.split("T")[0]+",";
            file += row.postedDate.split("T")[0]+",";
            file += row.exercise.exerciseName +",";
            file += row.exercise.amount +",";
            file += row.exercise.unit +"\n";
            rows += file;
        });
        console.log(rows);
        const csvFile = new Blob([rows], { type: 'text/csv;charset=utf-16;' });
        console.log(csvFile);
        let url = URL.createObjectURL(csvFile);
        setOwnBlob(url);
        console.log("url", url);
    }
    useEffect(() => {
        if(!load){
            requestExercises();
            setLoad(true);
        }
    }, [load]);

    return (<div>
        <a href={ownBlob} download>Click to Download Exercise History</a>
    </div>)
}

export default StatsDownloadSection;