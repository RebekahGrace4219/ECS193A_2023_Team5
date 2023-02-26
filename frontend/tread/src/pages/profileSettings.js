import SideBar from "../components/Shared/SideBar";
import ProfileSettingsHeader from "../components/ProfileSettings/ProfileSettingsHeader";
import SensorSection from "../components/ProfileSettings/SensorSection";
import DeleteSection from "../components/ProfileSettings/DeleteSection";

import "../css/Shared/page2.css"
const ProfileSettings = () => {
    return (
    <div id = "ProfileSettings" className = "Body2Part">
        <div className = "leftSide2Part">
            <SideBar></SideBar>
        </div>
        <div className="rightSide2Part">
            <ProfileSettingsHeader></ProfileSettingsHeader>
            <SensorSection></SensorSection>
            <DeleteSection></DeleteSection>
        </div>

    </div>
    );
}

export default ProfileSettings;