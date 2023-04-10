import BarButton from "../Shared/BarButton";
import "../../css/Shared/bar.css";

import {useState, useEffect} from 'react';

const LeagueBar = (props) => {
    const [onButton, setOnButton] = useState("All");


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

    function setLeague(){
        props.func("league");
        setOnButton("All");
    }

    function setSent(){
        props.func("sent");
        setOnButton("Sent");
    }

    function setOwner(){
        props.func("owner");
        setOnButton("Owner");
    }

    function setAdmin(){
        props.func("admin");
        setOnButton("Admin");
    }

    function setInvite(){
        props.func("invite");
        setOnButton("Received");
    }




    return (
        <div id = "LeagueBar" className="bar">
            <BarButton function = {setLeague} name = "All"></BarButton>
            <BarButton function = {setOwner} name = "Owner"></BarButton>
            <BarButton function = {setAdmin} name = "Admin"></BarButton>
            <BarButton function = {setSent} name = "Sent"></BarButton>
            <BarButton function = {setInvite} name = "Received"></BarButton>
        </div>
        )
}

export default LeagueBar;