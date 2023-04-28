import "../../css/Shared/dropDown.css";
const DropDownEntry = (props) => {
    return (<div className = {props.children.classes} onClick = {props.children.value.func}><p className = "dropDownText">{props.children.value.name}</p></div>)
};

export default DropDownEntry;