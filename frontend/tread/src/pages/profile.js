import '../css/profile.css'
import SideBar from '../components/SideBar';
import ProfileHeader from '../components/ProfileHeader';
import Friends from '../components/Friends';
import UserSettingsButton from '../components/UserSettingsButton';
import SuggestedFriends from '../components/SuggestedFriends';

/*        */
const Profile = () => {

    return (
        <div id = "Profile">
            <div id = "sideBar">
                <SideBar></SideBar>
            </div>
            <div id = "profileMiddle">
                <ProfileHeader></ProfileHeader>
                <Friends></Friends>
            </div>
            <div id = "profileEnd">
                <UserSettingsButton></UserSettingsButton>
                <SuggestedFriends></SuggestedFriends>
            </div>
        </div>
      );
}

export default Profile;