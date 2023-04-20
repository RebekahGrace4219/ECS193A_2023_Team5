
class Challenge{
    constructor(hashMap){

        this.challengeID = hashMap.challengeID;
        this.completed = hashMap.completed;
        this.dueDate = hashMap.dueDate;
        this.exerciseName = hashMap.exercise.exerciseName;
        this.exerciseAmount = hashMap.exercise.amount;
        this.unit = hashMap.exercise.unit;
        this.unitType = hashMap.exercise.unitType;
        this.convertedAmount = hashMap.exercise.convertedAmount;
        this.issueDate = hashMap.issueDate;
        this.progress = hashMap.progress;
    }
}

export default Challenge;