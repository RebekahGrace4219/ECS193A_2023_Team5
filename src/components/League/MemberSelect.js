import {useState} from 'react';
import "../../css/Shared/form.css";
const MemberSelect = (props) => {
    console.log(props);
    const [selfType] = useState(props.selfType);
    const [scrollType] = useState(props.scrollType);
    const [userType] = useState(props.userType);
    const [ifAdminTeam] = useState(selfType === "admin" || selfType === "owner");
    const [ifMember] = useState(selfType === "admin" || selfType === "owner" || selfType === "participant");
    return (
        <div>
            <select className = "formSelect" onChange = {props.memberReact}>
                {(ifMember) ? <option value = "friend">Friend</option> : <></>}
                {(ifMember) ? <option value = "block">Block</option> : <></>}
                {(ifAdminTeam && (scrollType === "all")) ? <option value = "kick">Kick Out</option> : <></>}
                {(ifAdminTeam && (scrollType === "all")) ? <option value = "ban">Ban</option> : <></>}
                {(ifAdminTeam && userType === "admin") ? <option value = "removeAdmin">Remove Admin</option> : <></>}
                {(ifAdminTeam && (userType === "participant")) ? <option value = "addAdmin">Add Admin</option> : <></>}
                {(scrollType === "pending" && (ifAdminTeam)) ? <option value = "accept">Accept</option> : <></>}
                {(scrollType === "pending" && (ifAdminTeam)) ? <option value = "decline">Decline</option> : <></>}
                {(scrollType === "banned" && (ifAdminTeam)) ? <option value = "unban">Unban</option> : <></>}
            </select>
        </div>
    );
}

export default MemberSelect;