import BarButton from "../Shared/BarButton";
import {usteState, useEffect} from 'react';
import "../../css/Shared/bar.css";

const CurrentChallengeBar = (props) => {
    const [onButton, setOnButton] = "issued";


    useEffect (
        () => {
            let elements = document.getElementsByClassName("barButton");

            for (let i = 0; i < elements.length; i++ ){
                let element = elements[i];
                console.log("Element", element.id);
                if (element.id === onButton){
                    console.log("Element matches!", element, onButton);
                    element.classList.add("onButton");
                    element.classList.remove("offButton")
                }
                else{
                    element.classList.add("offButton");
                    element.classList.remove("onButton");
                }
            }

        }, [onButton]
    );

    function setIssued(){
        props.func("issued");
        setOnButton("issued");
    }

    function setSent(){
        props.func("sent");
        setOnButton("sent");
    }

    function setReceived(){
        props.func("received");
        setOnButton("received");
    }
    return (
    <div className = "bar">
        <BarButton id = "issued" className = "barButton" function = {setIssued} name = "All"></BarButton>
        <BarButton id = "sent" className = "barButton" function = {setSent} name = "Sent"></BarButton>
        <BarButton id = "received" className = "barButton" function = {setReceived} name = "Received"></BarButton>
    </div>
    );
}

export default CurrentChallengeBar;