import "../../css/Profile/medalObj.css";

const MedalObj = (props) => {
    return(
        <div id = "MedalObj">
            <div className = "medalLeft">
                <div>
                    <img  className = "medalsItem" src = "https://i.imgur.com/OElCeGQ.png"></img>
                </div>
                <div>
                    <p className = "medalsItem medalsText">{props.description}</p>
                </div>
            </div>

            <div className = "medalRight">
                {
                    props.ifEarned
                    ?
                    <p className = "medalsItem medalsText">Earned : {props.date}</p>
                    :
                    <p className = "medalsItem medalsText">Progress : {props.done}/{props.total}</p>
                }

            </div>
        </div>
    )
}

export default MedalObj;