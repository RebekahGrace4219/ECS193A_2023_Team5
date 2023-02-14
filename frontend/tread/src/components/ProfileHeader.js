import "../css/profileHeader.css"

const ProfileHeader = () => {

    return (
        <div className = "profileHeaderClass">
            <div className = "profileNamePhoto">
                <h1 id = "profileName">Profile</h1>
                <div id = "changePhoto"><img id = "profilePhoto" src = "https://i.imgur.com/2BMQKKi.png" alt = "profile"/></div>
            </div>
            <div className = "displaySection">
                <div id = "blankSpace"></div>
                <div id = "displayName">Rebekah Grace</div>
                <div id = "displayUsername">@BronzeTiger#4219</div>
                <div className="displayUserInfo">
                    <div className = "numberInfo">3 Leagues</div>
                    <div className = "numberInfo">34 Friends</div>
                    <div className = "numberInfo">14 Medals</div>
                </div>
            </div>
        </div>
    );
}


export default ProfileHeader;