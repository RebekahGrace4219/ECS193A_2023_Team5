const StatsChallengeSection = () => {
  /*  const [load, setLoad] = useState(false);

    const [labels, setLabels] = useState([]);
    const [challengeLog, setChallengeLogs] = useState([]);
    const [completedChallenges, setCompletedChallenges] = useState([]);
    const [failedChallenges, setFailedChallenges] = useState([]);

    const [config, setConfig] = useState({
        labels: labels,
        datasets: [
          {
            label: 'Succesful Challenges',
            data: completedData,
            backgroundColor: Utils.CHART_COLORS.green,
          },
          {
            label: 'Failed Challenges',
            data: failedData,
            backgroundColor: Utils.CHART_COLORS.red,
          }
        ]
    });

    useEffect(() => {
        if(!load){
            requestChallenges();
            setLoad(true);
        }
    }, [load]);

    const getDate = (unixTimestamp) =>{
        let date = new Date(unixTimestamp);
        return date.toISOString().split("T")[0];
    }

    const determineLabels = (data) => {
        // Grab the first day, and make the labels up to today
        let firstChallenge = Date.parse(data[0].dueDate);
        let today = Date.now();

        dayLabels = [];
        for(let i = firstChallenge; i <= today; i += 24*60*60*1000){
            dayLabels.push(getDate(i));
        }

        setLabels(dayLabels);
    }
    const requestChallenges = () => {
        var config = {
            method : 'post',
            url : backend_url + 'stats/get_past_challenges',
            headers: {
              Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include'
          };
          axios(config)
          .then(function(response){
            setChallengeLogs(response.data);
            determineLabels(response.data);
          })
          .catch(function(error){
            if(error.response.status===401){
              window.location.href = "/loginPage";
          }
          });
    }

*/

    return (
    <div>
      Challenge Graph in Progress
    </div>
    )
}


export default StatsChallengeSection;