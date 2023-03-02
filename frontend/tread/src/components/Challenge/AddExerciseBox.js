import {useState} from 'react';

let sportList =  [
    "Aikido",
    "Archery",
    "Badminton",
    "Baseball",
    "Basketball",
    "Beach Volleyball",
    "Billards",
    "Bocce",
    "Bowling",
    "Boxing",
    "Brazilian Jiu-Jitsu",
    "Cheer",
    "Chess Boxing",
    "Cricket",
    "Cross-fit",
    "Cup Stacking",
    "Cycle",
    "Dodgeball",
    "Dressage",
    "Elliptical",
    "E-Sports",
    "Fish",
    "Football (American)",
    "Golf",
    "Gymnastics",
    "HIIT",
    "Hammer Throw",
    "Handball",
    "High Dive",
    "High Jump",
    "Hike",
    "Hockey",
    "Horse Racing",
    "Ice Skate",
    "Judo",
    "Karate",
    "Kickboxing",
    "Krav Maga",
    "Kung Fu",
    "Lacrosse",
    "Luge",
    "Martial Arts",
    "Netball",
    "Pickleball",
    "Pilates",
    "Pole Dance",
    "Polo",
    "Pool",
    "Quidditch",
    "Racquetball",
    "Rings (Gymnastics)",
    "Rock Climb",
    "Rodeo",
    "Rope Climb",
    "Rowing",
    "Rugby",
    "Run",
    "Sail",
    "Shot put",
    "Shuffleboard",
    "Skateboard",
    "Ski",
    "Sled",
    "Soccer",
    "Softball",
    "Speed Skate",
    "Spin",
    "Sport Kite",
    "Stairs",
    "Strech",
    "Surfing",
    "Swim",
    "Table Tennis",
    "Taekwondo",
    "Tennis",
    "Track and Field",
    "Treadmill",
    "Triathlon",
    "Volleyball",
    "Walk",
    "Water Polo",
    "Weightlifting (Lower Body)",
    "Weightlifting (Upper Body)",
    "Weightlifting",
    "Wrestling",
    "Yoga",
    "Other (Specify Below)",
    ];




const AddExerciseBox = () => {
    let [selfSpecify, setSelfSpecify] = useState(false);
    let [sportExercise, setSportExercise] = useState("");
    let [selfEntryErrorResponse, setSpecifyErrorResponse] = useState("");
    let [exerciseTime, setExerciseTime] = useState(0);
    let [exerciseAmount, setExerciseAmount] = useState(0);
    let [exerciseDate, setExerciseDate] = useState();

    function sportChange(event){
        setSelfSpecify((event.target.value === "Other (Specify Below)"));

        if (event.target.value != "Other (Specify Below)"){
            setSportExercise(event.target.value);
        }
    }

    function selfSpecifyChange(event){
        let selfEntry = event.target.value;

        if (selfEntry.length === 0 || selfEntry.length > 32){
            setSpecifyErrorResponse("The sport object should be 1-32 characters");
            return false;
        }
        setSpecifyErrorResponse("");
        setSportExercise(event.target.value);
    }

    return (
        <div id = "AddExerciseBox">
            <div>
                <p>Exercise</p>
                <select className = "formSelect" onChange = {sportChange}>
                        {sportList.map((name)=>{return <option value = {name}>{name}</option>;})}
                </select>
                { selfSpecify ?
                <div>
                    <input className = "formObjInner" type = "text" onChange = {selfSpecifyChange}/>
                    <p>{selfEntryErrorResponse}</p>
                </div>:<></>}

            </div>

            <div>
                <p>Time</p>
                <div>
                    <input type = "number"/>
                    <select className = "formSelect" onChange = {}>
                        <option value = "s">s</option>
                        <option value = "min">min</option>
                        <option value = "hr">hr</option>
                </select>
                </div>
            </div>

            <div>
                <p>Amount</p>
                <div>
                    <input type = "number"/>
                    <select className = "formSelect" onChange = {}>
                        <option value = "m">s</option>
                        <option value = "km">min</option>
                        <option value = "ft">hr</option>
                        <option value = "yard">hr</option>
                        <option value = "mile">hr</option>
                        <option value = "rep">hr</option>
                        <option value = "ct">hr</option>
                </select>
                </div>
            </div>

            <div>
                <p>Date</p>
                <input type = "date"/>
            </div>
        </div>
    )
}

export default AddExerciseBox;