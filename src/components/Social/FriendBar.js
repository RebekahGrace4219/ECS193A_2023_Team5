import BarButton from "../Shared/BarButton";
import "../../css/Shared/bar.css";

import {useState, useEffect} from 'react';

const FriendBar = (props) => {
    const [onButton, setOnButton] = useState("All");


    useEffect (
        () => {
            let elements = document.getElementsByClassName("barButton");

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

    function setFriend(){
        props.func("friend");
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

    function setBlocked(){
        props.func("blocked");
        setOnButton("Blocked");
    }

    function setAdd(){
        props.func("add");
        setOnButton("Add Friend");
    }

    return (
        <div id = "FriendBar" className="bar">
            <BarButton function = {setFriend} name = "All"></BarButton>
            <BarButton function = {setSent} name = "Sent"></BarButton>
            <BarButton function = {setReceived} name = "Received"></BarButton>
            <BarButton function = {setBlocked} name = "Blocked"></BarButton>
            <BarButton function = {setAdd} name = "Add Friend"></BarButton>
        </div>
    )

}

export default FriendBar;