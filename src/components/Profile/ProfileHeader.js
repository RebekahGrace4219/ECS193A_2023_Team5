import {useState, useEffect} from 'react';

const ProfileHeader = () => {
    const [load, setLoad] = useState(false);
    return(
        <div>
            <img src = {profilePicture}/>
            <p>{username}</p>
            <p>{displayName}</p>
            <p>{qrcode}</p>
        </div>
    )

}

export default ProfileHeader;