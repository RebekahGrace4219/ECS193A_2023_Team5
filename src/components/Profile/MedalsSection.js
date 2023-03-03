import {useState, useEffect} from 'react';
import MedalsBar from './MedalsBar';
import MedalsScroll from './MedalsScroll';

const MedalsSection = () => {
    const [ifEarned, setIfEarned] = useState(true);

    return (
    <div id = "MedalsSection">
        <div id = "MedalsHeader" className ="selectButtonHeader">
            <h1>Medals</h1>
            <MedalsBar changeFunction = {setIfEarned}></MedalsBar>
        </div>

        { ifEarned ?
            <MedalsScroll>{{"type" : "earned"}}</MedalsScroll>
            :
            <></>
        }

        {!ifEarned ?
            <MedalsScroll>{{"type" : "progress"}}</MedalsScroll>
            :<></>
        }
    </div>
    );
}

export default MedalsSection;