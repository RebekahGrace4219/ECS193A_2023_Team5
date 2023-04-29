import '../../css/Shared/button.css';

const BarButton = (props) => {
    const buttonChange = () => {
        props.func(props.name);
    }
    const createClassList = () => {
        let classList = "BarButton";

        if (props.defaultOn){
            classList += " OnButton";
        }
        else{
            classList += " OffButton";
        }

        if(props.create){
            classList += "Create"
        }
        else{
            classList += "NoCreate";
        }
        return classList;
    }
    return (<button id = {props.name+"BarButton"} onClick = {buttonChange} classes = {createClassList()}>{props.name}</button>);
}
export default BarButton;