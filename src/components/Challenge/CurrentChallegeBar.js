import BarButton from "../Shared/BarButton";
import {useState, useEffect} from 'react';
import "../../css/Shared/bar.css";

const CurrentChallengeBar = (props) => {
    const [onButton, setOnButton] = useState("All");


    useEffect (
        () => {
            let elements = document.getElementsByClassName("barButton");
            console.log(elements[0].id);
            console.log("OnBUtton is ", onButton);


            for (let i = 0; i < elements.length; i++ ){
                let element = elements[i];
                if (element.id === onButton){
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

    function setIssued(){
        props.func("issued");
        setOnButton("All");
    }

    function setSent(){
        props.func("sent");
        setOnButton("Sent");
    }

    function setReceived(){
        props.func("received");
        setOnButton("Received");
    }
    return (
    <div className = "bar">
        <BarButton function = {setIssued} name = "All"></BarButton>
        <BarButton function = {setSent} name = "Sent"></BarButton>
        <BarButton function = {setReceived} name = "Received"></BarButton>
    </div>
    );
}

export default CurrentChallengeBar;