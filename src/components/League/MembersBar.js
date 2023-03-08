import BarButton from "../Shared/BarButton";
import "../../css/Shared/bar.css";
import {useState} from "react";

const MembersBar = (props) => {

    function setAll(){
        props.changeFunction("all");
    }

    function setRequesting(){
        props.changeFunction("requesting");
    }

    function setInvited(){
        props.changeFunction("invited");
    }

    function setBanned(){
        props.changeFunction("banned");
    }

    return (
        <div>
        { (props.selfType === "admin" || props.selfType === "owner")
         ?
        <div className = "bar">
            <BarButton function = {setAll} name = "All"></BarButton>
            <BarButton function = {setRequesting} name = "Pending"></BarButton>

            <BarButton function = {setInvited} name = "Invited"></BarButton>
            <BarButton function = {setBanned} name = "Banned"></BarButton>
        </div>
        :
        <></>
    }</div>
        );

}
export default MembersBar;