

class ExerciseLog{
    constructor(hashMap){
        this.loggedDate = hashMap.loggedDate;
        this.exerciseName = hashMap.exercise.exerciseName;
        this.unit = hashMap.exercise.unitl
        this.exerciseAmount = hashMap.exercise.amount;
        this.convertedAmount = hashMap.exercise.convertedAmount;
        this.postedDate = hashMap.postedDate;
        this.unitType = hashMap.exercise.unitType;
    }
}

export default ExerciseLog;