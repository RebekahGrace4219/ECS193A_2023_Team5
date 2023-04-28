import RowBox from "../components/Social/RowBox";
import {useState} from "react";
import "./try.css";
import DropDown from "../components/Shared/DropDown";
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

    let values = [{"name":"Logout", "func":logoutGo},{"name":"Profile", "func":profileGo}];
    return(
        <div id = "testID">
            <DropDown>{values}</DropDown>
        </div>
    );
}

export default TestDiv;