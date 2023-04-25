import { useState } from "react";

const LeagueNameForm = (props) => {
    const [nameError, setNameError] = useState("");
    const updateLeagueName = (event) => {
        let leagueName = event.target.value;
        if (leagueName.length === 0 || leagueName.length > 32){
          setNameError("Cannot create league, League Name must be between 1-32 characters");
          props.updateLeagueName("");
          return false
        }

        if ((/^\s+$/i.test(leagueName))) {
          setNameError("Cannot create league, League Name cannot be a string of spaces");
          props.updateLeagueName("");
          return false
        }

        setNameError("");
        props.updateLeagueName(leagueName);
      }

    return (
        <div className="formObj">
            <h2>League Name</h2>
            <input className="formTextInput" type="text" onChange={updateLeagueName} />
            <p className="errorBox">{nameError}</p>
        </div>
    );

}

export default LeagueNameForm;