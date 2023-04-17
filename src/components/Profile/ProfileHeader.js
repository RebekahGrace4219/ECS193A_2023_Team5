import {useState, useEffect} from 'react';

const ProfileHeader = () => {
    const [load, setLoad] = useState(false);
    const [username, setUsername] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [qrcode, setQRCode] = useState("");
    const [profilePhoto, setProfilePhoto] = useState("");
    return(
        <div>
            <p>{username}</p>
            <p>{displayName}</p>
            <p>{qrcode}</p>
        </div>
    )

}

export default ProfileHeader;