import RowBox from "../components/Social/RowBox";
import {useState} from "react";
import Bar from "../components/Shared/Bar";
import "./try.css";

const TestDiv = () => {
    const updateFunc = (value) => {
        console.log(value, " clicked")
    }

    let buttonList = [{"name": "All", "defaultOn":true, "create":false},
                        {"name": "Sent", "defaultOn":false, "create":false},
                        {"name": "Received", "defaultOn":false, "create":false},
                        {"name": "Create", "defaultOn":false, "create":true}];
    return (<div>
        <p>Testing Page</p>
        <Bar>{{"buttonList":buttonList, "updateFunc":updateFunc}}</Bar>
    </div>)
}

export default TestDiv;