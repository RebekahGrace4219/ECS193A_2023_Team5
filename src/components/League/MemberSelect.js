import {useState} from 'react';

const MemberSelect = (props) => {
    const [selfType] = useState(props.selfType);
    const [userType] = useState(props.userType);
    const [adminTeam] = useState(selfType === "admin" || selfType === "owner");
    return (
        <div>
            <select onChange = {props.memberReact}>
                <option value = "friend">Add Friend</option>
                <option value = "block">Block</option>
                {(adminTeam && userType !== "owner") ? <option value = "kick">Kick Out</option> : <></>}
                {(adminTeam && userType !== "owner") ? <option value = "ban">Ban</option> : <></>}
                {(adminTeam && userType === "admin") ? <option value = "removeAdmin">Remove Admin</option> : <></>}
                {(adminTeam && userType === "participant") ? <option value = "addAdmin">Add Admin</option> : <></>}
            </select>
        </div>
    );
}

export default MemberSelect;