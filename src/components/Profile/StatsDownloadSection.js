import {useState, useEffect} from "react";
import axios from 'axios';
const backend_url = process.env.REACT_APP_PROD_BACKEND;
const StatsDownloadSection = () => {
    const [load, setLoad] = useState(false);
    const [data, setData] = useState("");

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
            setData(response.data);
          })
          .catch(function(error){
            console.log("error");
            console.log(error);
            if(error.response.status===401){
              window.location.href = "/loginPage";
          }
          });

    }

    useEffect(() => {
        if(!load){
            requestExercises();
            setLoad(true);
        }
    }, [load]);

    return (<div>
        <a href="" download>Click to Download</a>
    </div>)
}

export default StatsDownloadSection;