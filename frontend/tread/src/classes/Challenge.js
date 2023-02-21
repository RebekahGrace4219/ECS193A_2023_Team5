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
    constructor(sentUser, recievedUser, recievedType, issueDate, dueDate, exerciseList, challengeID){
        this.sentUser = sentUser;
        this.recievedUser = recievedUser;
        this.recievedType = ENUM_CHALLENGE_DESTINATION[recievedType];
        this.issueDate = issueDate;
        this.dueDate = dueDate;
        this.exerciseList = exerciseList;
        this.challengeID = challengeID;


        this.users = this.populateUsers();
        this.progress = this.createProgressBars();
        this.status = this.determineStatus();
    }

    checkErrors(){
        if (this.exerciseList.length <= 0){
            Error("The length of the exercise list should be at least 1.");
        }

        if (this.exerciseList.length > 5){
            Error("The length of the exercise list should be no more than 5.")
        }

        if(this.issueDate > this.dueDate){
            Error("The challenge is issued before it is due.");
        }

    }
    populateUsers(){
        if (this.recievedType === ENUM_CHALLENGE_DESTINATION["personal"]){
            this.users = new Set([this.sentUser]);
        }
        else if (this.recievedType === ENUM_CHALLENGE_DESTINATION["friend"]){
            this.users = new Set([this.sentUser, this.recievedUser]);
        }
        else if (this.recievedType === ENUM_CHALLENGE_DESTINATION["league"]){
            // TODO: must pull all the users from the league
            this.users = new Set();
        }
    }

    createProgressBars(){
        // For each user, for each exercise, log how much they have done
        let progress = {}
        let arrayUsers = Array.from(this.users);
        for (let userIndex = 0; userIndex < arrayUsers.length; userIndex++){
            progress[arrayUsers[userIndex]] = createExerciseListProgress();
        }
        return progress;
    }

    createExerciseListProgress(){
        let exerciseProgress = {}
        for (let exerciseIndex = 0; exerciseIndex < this.exerciseList.length; i++){
            type = excerciseList[exerciseIndex][0];
            exerciseProgress[type] = 0;
        }
        return exerciseProgress;
    }

    determineStatus(){
        if (this.recievedType === ENUM_CHALLENGE_DESTINATION["personal"]){
            this.status =  ENUM_CHALLENGE_STATUS["accepted"];
        }
        else if (this.recievedType === ENUM_CHALLENGE_DESTINATION["friend"]){
            this.status =  ENUM_CHALLENGE_STATUS["pending"];
        }
        else if (this.recievedType === ENUM_CHALLENGE_DESTINATION["league"]){
            this.status =  ENUM_CHALLENGE_STATUS["accepted"];
        }
    }

    acceptChallenge(){
        this.status = ENUM_CHALLENGE_STATUS["accepted"];
        // TODO: Change Challenges in the Collection
    }

    declineChallenge(){
        this.status = ENUM_CHALLENGE_STATUS["declined"];
        // TODO: Change Challenges in the Collection
    }

    updateProgress(username, exerciseLog){
        // TODO
    }

    convertToJSON(){
        // TODO
    }

    createFromJSON(){
        //TODO
    }


}