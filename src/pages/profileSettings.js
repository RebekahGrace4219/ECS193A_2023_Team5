import SideBar from "../components/Shared/SideBar";
import ProfileSettingsHeader from "../components/ProfileSettings/ProfileSettingsHeader";
import Line from "../components/Shared/Line";
import ProfileSettingsForm from "../components/ProfileSettings/ProfileSettingsForm"
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
            <Line></Line>
            <ProfileSettingsForm></ProfileSettingsForm>
            <Line></Line>
            <SensorSection></SensorSection>
            <Line></Line>
            <DeleteSection></DeleteSection>
        </div>
    </div>
    );
}

export default ProfileSettings;