import SideBar from "../components/Shared/SideBar";
import ProfileSettingsHeader from "../components/ProfileSettings/ProfileSettingsHeader";
import SensorSection from "../components/ProfileSettings/SensorSection";
import DeleteSection from "../components/ProfileSettings/DeleteSection";
import "../css/ProfileSettings/profileSettings.css";
const ProfileSettings = () => {
    return (
    <div id = "ProfileSettings">
        <SideBar></SideBar>
        <div id = "SettingsForm">
            <ProfileSettingsHeader></ProfileSettingsHeader>
            <SensorSection></SensorSection>
            <DeleteSection></DeleteSection>
        </div>

    </div>
    );
}

export default ProfileSettings;