import BarButton from "../Shared/BarButton";
import "../../css/Shared/bar.css";
import {useState, useEffect} from 'react';

const MedalsBar = (props) => {
    const [onButton, setOnButton] = useState("Earned");

    useEffect (
        () => {
            let elements = document.getElementsByClassName("barButton");
            console.log(elements[0].id);
            console.log("OnBUtton is ", onButton);


            for (let i = 0; i < elements.length; i++ ){
                let element = elements[i];
                if (element.id === "Add Friend" && onButton === "Add Friend"){
                    element.classList.add("barAddSelectedButton");
                    element.classList.remove("barAddUnselectedButton");
                }
                else if(element.id === "Add Friend" && onButton !== "Add Friend"){
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

    function setEarned(){
        props.changeFunction(true);
        setOnButton("Earned");
    }

    function setInProgress(){
        props.changeFunction(false);
        setOnButton("In Progress");
    }

    return (
    <div className = "bar">
        <BarButton function = {setEarned} name = "Earned"></BarButton>
        <BarButton function = {setInProgress} name = "In Progress"></BarButton>
    </div>
    );
}

export default MedalsBar;