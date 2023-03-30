import BarButton from "../Shared/BarButton";
import "../../css/Shared/bar.css";
import "../../css/Shared/button.css";
import {useState, useEffect} from 'react';

const MembersBar = (props) => {
    const [onButton, setOnButton] = useState("All");

    useEffect (
        () => {
            let elements = document.getElementsByClassName("barButton");

            for (let i = 0; i < elements.length; i++ ){
                let element = elements[i];
                if (element.id === "Add User" && onButton === "Add User"){
                    element.classList.add("barAddSelectedButton");
                    element.classList.remove("barAddUnselectedButton");
                }
                else if(element.id === "Add User" && onButton !== "Add User"){
                    element.classList.add("barAddUnselectedButton");
                    element.classList.remove("barAddSelectedButton");
                }
                else if (element.id === onButton){
                    console.log("Element matches!", element, onButton);
                    element.classList.add("barSelectedButton");
                    element.classList.remove("barUnselectedButton");
                }
                else{
                    element.classList.add("barUnselectedButton");
                    element.classList.remove("barSelectedButton");
                }
            }

        }, [onButton]
    );

    function setAll(){
        props.changeFunction("all");
        setOnButton("All");
    }

    function setRequesting(){
        props.changeFunction("requesting");
        setOnButton("Pending");
    }

    function setInvited(){
        props.changeFunction("invited");
        setOnButton("Invited");
    }

    function setBanned(){
        props.changeFunction("banned");
        setOnButton("Banned");
    }

    function setAdd(){
        props.changeFunction("addUser");
        setOnButton("Add User");
    }

    return (

        <div className = "bar">
            <BarButton function = {setAll} name = "All"></BarButton>
            <BarButton function = {setRequesting} name = "Pending"></BarButton>

            <BarButton function = {setInvited} name = "Invited"></BarButton>
            <BarButton function = {setBanned} name = "Banned"></BarButton>

            <BarButton function = {setAdd} name = "Add User"></BarButton>
        </div>
        );

}
export default MembersBar;