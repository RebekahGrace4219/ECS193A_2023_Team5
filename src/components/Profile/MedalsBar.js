import BarButton from "../Shared/BarButton";
import "../../css/Shared/bar.css";
import {useState, useEffect} from 'react';

const MedalsBar = (props) => {
    const [onButton, setOnButton] = useState("Earned");

    useEffect (
        () => {
            let elements = document.getElementsByClassName("barButton");

            for (let i = 0; i < elements.length; i++ ){
                let element = elements[i];
                if (element.id === onButton){
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