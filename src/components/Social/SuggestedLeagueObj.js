import "../../css/Shared/suggestionBox.css";

const SuggestedLeagueObj = (props) => {
    return(
        <div id = "SuggestedLeagueObj" className="suggestionObj">
            <div className = "suggestionImageSection">
                <img className = "suggestionImage" src = {props.picture}/>
            </div>
            <div className = "suggestionWritingSection">
                <p  className = "suggestionHeaderStyle" >{props.leagueName}</p>
            </div>
        </div>
    )
}


export default SuggestedLeagueObj;