import '../css/profile.css'
import SideBar from '../components/Shared/SideBar';
import ProfileHeader from '../components/Profile/ProfileHeader';
import Friends from '../components/Friends';
import UserSettingsButton from '../components/UserSettingsButton';
import SuggestedFriends from '../components/Shared/SuggestedFriends';
import Line from '../components/Shared/Line';

const Profile = (props) => {
    return (
        <div id = "Profile">
            <div id = "sideBar">
                <SideBar></SideBar>
            </div>
            <div id = "profileMiddle">
                <div id = "innerProfileMiddle">
                <ProfileHeader></ProfileHeader>
                <Line></Line>
                <Friends></Friends>

                </div>
            </div>
            <div id = "profileEnd">
                <UserSettingsButton></UserSettingsButton>
                <SuggestedFriends></SuggestedFriends>
            </div>
        </div>
      );
}

export default Profile;