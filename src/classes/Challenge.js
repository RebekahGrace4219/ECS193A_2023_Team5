import React from 'react';

const ENUM_CHALLENGE_STATUS = {
    "pending":"pending",
    "accepted":"accepted",
    "declined":"declined"
}

const ENUM_CHALLENGE_DESTINATION = {
    "personal":"personal",
    "friend":"friend",
    "league":"league"
}

class Challenge{
    constructor(json){
        this.sentUser = this.loadProperty(json, "sentUser", "");
        this.receivedUser =  this.loadProperty(json, "receivedUser", "");
        this.receivedType = this.loadProperty(json, "receivedType", "");
        this.issueDate = this.loadProperty(json, "issueDate", "");
        this.dueDate = this.loadProperty(json, "dueDate", "");
        this.exerciseList = this.loadProperty(json, "exerciseList", []);
        this.people = this.loadProperty(json, "people", {});
        this.status = this.loadProperty(json, "status", "pending");
        this.challengeID = this.determineChallengeID(json);
    }

    loadProperty(json, propertyName, defaultValue){
        if(json.hasOwnProperty(propertyName)){
            return json[propertyName];
        }
        return defaultValue;
    }

    generateUniqueChallengeID(){
        //TODO
        return 5;
    }

    determineChallengeID(json){
        if (json.hasOwnProperty("challengeID")){
            return json["challengeID"];
        }
        return generateUniqueChallengeID();
    }

    setExerciseList(exerciseList){
        this.exerciseList = exerciseList;

        if (exerciseList.length <= 0 || exerciseList.length > 5){
            //TODO, write error
            return false;
        }


        this.people.keys().foreach((key)=>{
            this.people[key] = {};

            for(let i = 0; i < exerciseList.length; i++){
                this.people[key][i] = 0;
            }
        })

        return true;

    }


    acceptChallenge(){
        this.status = ENUM_CHALLENGE_STATUS["accepted"];
    }

    declineChallenge(){
        this.status = ENUM_CHALLENGE_STATUS["declined"];
    }



    convertToJSON(){
        json = {}
        json["sentUser"] = this.sentUser;
        json["receivedUser"] = this.receivedUser;
        json["receivedType"] = this.receivedType;
        json["issueDate"] = this.issueDate;
        json["dueDate"] = this.dueDate;
        json["exerciseList"] = this.exerciseList;
        json["people"] = this.people;
        json["status"] = this.status;
        json["challengeID"] = this.challengeID;
    }

    calculateCompletionAmount(username){

    }

}