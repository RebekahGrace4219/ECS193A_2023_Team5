

class ExerciseLog{
    constructor(hashMap){
        this.loggedDate = hashMap.loggedDate;
        this.exerciseName = hashMap.exercise.exerciseName;
        this.unit = hashMap.exercise.unitl
        this.exerciseAmount = hashMap.exercise.amount;
        this.convertedAmount = hashMap.exercise.convertedAmount;
        this.postedDate = hashMap.postedDate;
        this.unitType = hashMap.exercise.unitType;
        this.day = this.loggedDate.split("T")[0];
        this.month = this.loggedDate.substring(0,7);
        this.year = this.loggedDate.substring(0,4);
    }
}

export default ExerciseLog;