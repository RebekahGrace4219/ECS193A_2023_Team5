
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
        this.startMonth = this.issueDate.split("-")[1];
        this.endMonth = this.dueDate.split("-")[1];
    }

    ifCompleted(){
        if (this.completed){
            return 1;
        }
        return 0;
    }

    ifWeekend(date){
        let day = new Date(1000*Date.parse(date));

        if(day.getDay() === 0 || day.getDay() === 6){
            return(1);
        }
        else{
            return(0);
        }
    }

    createObject(){
        let obj = {};
        obj["complete"] = this.ifCompleted();
        obj["issue_date"] = Date.parse(this.issueDate);
        obj["due_date"] = Date.parse(this.dueDate);
        obj["issue_date_if_weekend"] = this.ifWeekend(this.issueDate);
        obj["due_date_if_weekend"] = this.ifWeekend(this.dueDate);
        obj["start_month"] = this.startMonth;
        obj["end_month"] = this.endMonth;
        obj["exerciseName"] = this.exerciseName;
        obj["exerciseAmount"] = this.exerciseAmount;
        obj["unit"] = this.unit;
        obj["unitType"] = this.unitType;
        return obj;


    }
}

export default Challenge;