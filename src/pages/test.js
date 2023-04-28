import RowBox from "../components/Social/RowBox";
import {useState} from "react";
import "./try.css";
/*<p>Divide</p>
            //<RowBox>{{"informationType": "Suggest", "socialType": "League"}}</RowBox>
            <p>Divide</p>
            //<RowBox>{{"informationType": "Recent", "socialType": "League"}}</RowBox>
            <p>Divide</p>
            //<RowBox>{{"informationType": "Recent", "socialType": "Friend"}}</RowBox>*/
const TestDiv = () => {
    const [listShow, setListShow] = useState(false);
    const showList = () => {
        setListShow(!listShow);
    }

    const profileGo = () => {
        console.log("would have gone to profile");
    }

    const logoutGo = () => {

    console.log("would have gone to loguout");
    }
    return(
        <div>
            <button onClick = {showList}></button>

            {listShow ? <ul className = "dropdownTry">
            <li onClick = {profileGo} style={{"list-style-type":"none"}}>Profile</li>
            <li onClick = {logoutGo} style={{"list-style-type":"none"}}>Logout</li>
            </ul> :<></>}


        </div>
    );
}

export default TestDiv;