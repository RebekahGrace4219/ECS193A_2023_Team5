import { useEffect, useState } from 'react';
import axios from 'axios';
import Challenge from "../../Helpers/Challenge";
//const tf = require('@tensorflow/tfjs');
const backend_url = process.env.REACT_APP_PROD_BACKEND;

// Code derived from TensorFlow.JS Pitch Example
const StatsCalculatorSection = () => {
    /*const [load, setLoad] = useState(false);
    const [trainingData, setTrainingData]= useState([]);

    useEffect(() => {
        if (!load) {
            requestChallenges();
            setLoad(true);
        }
    }, [load]);

    useEffect(() => {
        if (trainingData.size > 0) {
            console.log("training data");
            trainModel()
        }
    }, [trainingData]);

    async function trainModel () {
        const model = tf.sequential();
        model.add(tf.layers.dense({ units: 250, activation: 'relu', inputShape: [4,10] }));
        model.add(tf.layers.dense({ units: 175, activation: 'relu' }));
        model.add(tf.layers.dense({ units: 150, activation: 'relu' }));
        model.add(tf.layers.dense({ units: 2, activation: 'softmax' }));

        model.compile({
            optimizer: tf.train.adam(),
            loss: 'sparseCategoricalCrossentropy',
            metrics: ['accuracy']
        });

        let numTrainingIterations = 10;
        for (var i = 0; i < numTrainingIterations; i++) {
          await model.fitDataset(trainingData, {epochs: 1});
        }
        console.log("the model ran");
        let sample = [1681689600000, 1681948800000, 1, 0, "04", "04", "Baseball", 23, "m", "distance"];

        let result = model.predict(tf.tensor([1681689600000, 1681948800000, 1, 0, "04", "04", "Baseball", 23, "m", "distance"])).arraySync();
        console.log("The model result is", result);
    }

    const organizeTrainingData = (data) => {
        let challengeLog = [];

        data.forEach((element) => {
            challengeLog.push(new Challenge(element))
        }
        )

        return challengeLog;
    }


    const tensorCreator = (item) => {
        let values = [
            item["issue_date"],
            item["due_date"],
            item["issue_date_if_weekend"],
            item["due_date_if_weekend"],
            item["start_month"],
            item["end_month"],
            item["exerciseName"],
            item["exerciseAmount"],
            item["unit"],
            item["unitType"]
        ];
        return {xs:values, ys:item["complete"]};
    }
    async function cleanData(data) {
        let training = [];
        data.forEach((element) => {
            training.push(element.createObject());
        });
        console.log(training);

        let trainingData = tf.data.array(training).map(tensorCreator).batch(1);
        console.log(trainingData);

        trainingData.forEachAsync(e => {
            console.log(e);
         });
        const model = tf.sequential();
        model.add(tf.layers.dense({ units: 250, activation: 'relu', inputShape: [10] }));
        model.add(tf.layers.dense({ units: 175, activation: 'relu' }));
        model.add(tf.layers.dense({ units: 150, activation: 'relu' }));
        model.add(tf.layers.dense({ units: 2, activation: 'softmax' }));

        model.compile({
            optimizer: tf.train.adam(),
            loss: 'sparseCategoricalCrossentropy',
            metrics: ['accuracy']
        });

        let numTrainingIterations = 10;
        for (var i = 0; i < numTrainingIterations; i++) {
          await model.fitDataset(trainingData, {epochs: 1});
        }
        console.log(model);
        /*
        console.log("the model ran");
        let sample = [1681689600000, 1681948800000, 1, 0, "04", "04", "Baseball", 23, "m", "distance"];

        let result = model.predict(tf.tensor([1681689600000, 1681948800000, 1, 0, "04", "04", "Baseball", 23, "m", "distance"])).arraySync();
        //console.log("The model result is", result);

    }




    const requestChallenges = () => {
        var config = {
            method: 'post',
            url: backend_url + 'stats/get_past_challenges',
            headers: {
                Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include'
        };
        axios(config)
            .then(function (response) {
                let convertedData = organizeTrainingData(response.data);
                cleanData(convertedData);
            })
            .catch(function (error) {
                console.log("Error is ", error);
                if (error.response.status === 401) {
                    window.location.href = "/loginPage";
                }
            });
    }*/
    //<div>Working on it</div>
    return (
        <div></div>
    );
}

export default StatsCalculatorSection;