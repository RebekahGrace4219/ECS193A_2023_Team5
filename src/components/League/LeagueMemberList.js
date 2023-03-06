import {useState} from 'react';
import MemberEntry from './MemberEntry';

const LeagueMemberList = (props) => {
    let id = props.children.id;

    const [memberList] = useState(getMemberList());
    const [selfType] = useState(getSelfType());
    function getMemberList(){
        // get list from service
        return [
            {"username": "Person 1", "displayName": "Person 1" , "userType": "owner", "photo": "https://i.imgur.com/q3vP5BH.png"},
            {"username": "Person 2", "displayName": "Person 2" , "userType": "admin", "photo": "https://i.imgur.com/q3vP5BH.png"},
            {"username": "Person 3", "displayName": "Person 3" , "userType": "admin", "photo": "https://i.imgur.com/q3vP5BH.png"},
            {"username": "Person 4", "displayName": "Person 4" , "userType": "participant", "photo": "https://i.imgur.com/q3vP5BH.png"},
            {"username": "Person 5", "displayName": "Person 5" , "userType": "participant", "photo": "https://i.imgur.com/q3vP5BH.png"},

        ];
    }

    function getSelfType(){
        // get from server
        return "owner";
    }

    function makeMemberEntryObj(input){
        return(<MemberEntry selfType = {selfType}>{input}</MemberEntry>);
    }

    return(
        <div>
            {memberList.map(makeMemberEntryObj)}
        </div>
    )
}

export default LeagueMemberList;