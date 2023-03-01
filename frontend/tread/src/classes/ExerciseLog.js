TIME_UNITS = ["sec", "min", "hr"];
DISTANCE_UNITS = ["ft", "yd", "mile", "m", "km"];
COUNT_UNITS = ["ct"];

const ENUM_UNIT_TYPES = {
    "time": "time",
    "count": "count",
    "distance": "distance"
}

class ExerciseLog{
    constructor(dateDone, dateLogged, exerciseType, amount, unitMeasurement){
        this.dateDone = dateDone;
        this.dateLogged = dateLogged;
        this.exerciseType = exerciseType;
        this.amount = amount;
        this.unitMeasurement = unitMeasurement;

        this.measurementType = this.determineMeasurementType();
        this.convertedMeasurement = this.convertMeasurement();
    }

    static createFromJSON(json){
        return new ExerciseLog(
            json["dateDone"],
            json["dateLogged"],
            json["exerciseType"],
            json["amount"],
            json["unitMeasurement"]);
    }

    makeJSON(){
        return {
            "dateDone":this.dateDone,
            "dateLogged": this.dateLogged,
            "exerciseType": this.exerciseType,
            "amount":this.amount,
            "unitMeasurement": this.unitMeasurement
        };
    }

    determineMeasurementType(){
        if (TIME_UNITS.includes(this.unitMeasurement)){
            return ENUM_UNIT_TYPES["time"];
        }
        else if(DISTANCE_UNITS.includes(this.unitMeasurement)){
            return ENUM_UNIT_TYPES["distance"];
        }
        else if(COUNT_UNITS.includes(this.unitMeasurement)){
            return ENUM_UNIT_TYPES["count"];
        }
        return "count";
    }

    convertMeasurement(){
        if (this.measurementType === ENUM_UNIT_TYPES["time"]){
            return this.convertMeasurementTime();
        }
        else if (this.measurementType === ENUM_UNIT_TYPES["distance"]){
            return this.convertMeasurementDistance();
        }

        return this.amount;
    }

    convertMeasurementTime(){
        if (this.unitMeasurement === "s"){
            return this.amount/60;
        }
        else if (this.unitMeasurement === "min"){
            return this.amount;
        }
        else if (this.unitMeasurement === "hr"){
            return this.amount * 60;
        }

        return this.amount;
    }

    convertMeasurementDistance(){
        if (this.unitMeasurement === "ft"){
            return this.amount * 0.3048;
        }
        else if (this.unitMeasurement === "yd"){
            return this.amount * 0.9144;
        }
        else if (this.unitMeasurement === "mile"){
            return this.amount * 1609.34;
        }
        else if (this.unitMeasurement === "m"){
            return this.amount;
        }
        else if (this.unitMeasurement === "km"){
            return this.amount * 1000;
        }

        return this.amount;
    }

}
