import "../../css/Shared/pageSwitch.css"
const PageSwitch = (props) => {

    return(
        <div>
        {  props.type === "challenge" ?
            <div id ="PageSwitch">
                <button>Current</button>
                <button>Global</button>
            </div>
            :
            <></>
        }
        {  props.type === "social" ?
            <div id ="PageSwitch">
                <button>Friend</button>
                <button>League</button>
            </div>
            :
            <></>
        }
        {  props.type === "profile" ?
            <div id ="PageSwitch">
                <button>Stats</button>
                <button>Medals</button>
            </div>
            :
            <></>
        }
        </div>


    )
}

export default PageSwitch;