import DropDownEntry from "./DropDownEntry";
import "../../css/Shared/dropDown.css";

const DropDown = (props) => {
    console.log(props);
    const makeDropDownObj = (value, index) => {
        let classes = "dropDownEntry";
        if (index === 0){
            classes += " roundTop";
        }
        if(index === props.children.length - 1){
            classes += " roundBottom";
        }

        if (index === 0){
            return (<div className = "dropDownRow">
                <DropDownEntry>{{"value":value, "classes":classes}}</DropDownEntry>
            </div>)
        }
        else{
            return (
                <div className="dropDownRow">
                    <div className="topLine"></div>
                    <DropDownEntry>{{"value":value, "classes":classes}}</DropDownEntry>
                </div>
            );
        }
    }

    return (
    <div className="dropdown">
        {props.children.map(makeDropDownObj)}
    </div>
    );
}

export default DropDown;