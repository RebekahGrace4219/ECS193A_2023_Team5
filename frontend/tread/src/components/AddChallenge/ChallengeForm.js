import Line from "../Shared/Line";
import {useState} from 'react';
const ChallengeForm = () =>{

    function getInviteOptions(){
        return ["person1", "league2"];
    }
    const [inviteOptions, setInviteOptions] = useState(getInviteOptions());

    return (
        <div id = "ChallengeForm">
            <h1>Challenges</h1>
            <h2>Create a Challenge</h2>
            <Line/>
            <p>What do you want to do?</p>

            <div>
                <select>
                    <option value = "Run">Run</option>
                    <option value = "Swim">Swim</option>
                    <option value = "Hike">Hike</option>
                    <option value = "Self-Specify">Self-Specify</option>
                </select>
            </div>
            <div>
                <input type = "text"/>
            </div>

            <div>
                <input type = "number"/>
                <select>
                    <option value = "ct">ct</option>
                    <option value = "m">m</option>
                    <option value = "km">km</option>
                    <option value = "ft">ft</option>
                    <option value = "yd">yd</option>
                    <option value = "mi">mi</option>
                    <option value = "min">min</option>
                    <option value = "hr">hr</option>
                </select>
            </div>

            <div>
                <input type = "date"></input>
            </div>

            <div>
                <input type = "date"></input>
            </div>

            <div>
                <select>
                    <option value = "Self">Self</option>
                    <option value = "Friend">Friend</option>
                    <option value = "League">League</option>
                </select>
            </div>
            <div>
                <select>
                    {inviteOptions.map((name)=>{return <option>{name}</option>;})}
                </select>
            </div>

        </div>
    );
}

export default ChallengeForm;