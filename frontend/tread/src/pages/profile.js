import SideBar from '../components/Shared/SideBar';
import ProfileHeader from '../components/Profile/ProfileHeader';
import StatsSection from '../components/Profile/StatsSection';
import MedalsSection from '../components/Profile/MedalsSection';
import UserSettingsButton from '../components/Shared/UserSettingsButton';
import SuggestionBox from '../components/Shared/SuggestionBox';

import '../css/Shared/page3.css';

const Profile = (props) => {
    return (
        <div id = "Profile" className='Body3Part'>
            <div className = "leftSide3Part">
                <SideBar></SideBar>
            </div>
            {
                (props.children.type === "stats") ?
                <div className = "middleSide3Part">
                    <ProfileHeader/>
                    <StatsSection/>
                </div>
                :
                <div className = "middleSide3Part">
                    <ProfileHeader/>
                    <MedalsSection/>
                </div>

            }
            <div className = "rightSide3Part">
                <UserSettingsButton/>
                <SuggestionBox>{{"type":"league"}}</SuggestionBox>
            </div>
        </div>
      );
}

export default Profile;