

const MedalObj = (props) => {
    return(
        <div id = "MedalCompleteObj">
            <div>
                <img src = "https://i.imgur.com/OElCeGQ.png"></img>
            </div>
            <div>
                <p>{props.description}</p>
            </div>
            <div>
                {
                    props.ifEarned
                    ?
                    <p>Earned : {props.date}</p>
                    :
                    <p>Progress : {props.done}/{props.total}</p>
                }

            </div>
        </div>
    )
}

export default MedalObj;