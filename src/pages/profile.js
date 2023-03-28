import SideBar from '../components/Shared/SideBar';
import Header from '../components/Shared/Header';
import Line from "../components/Shared/Line";
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
            <div className = "middleSide3Part">
                <Header>{{"title":"Profile", "type":"profile", "onButton":props.children.type}}</Header>
                <Line/>
            </div>
            {
                (props.children.type === "stats") ?
                    <StatsSection/>
                :
                <MedalsSection/>
            }
            <div className = "rightSide3Part">
                <SuggestionBox>{{"type":"medal"}}</SuggestionBox>
            </div>
        </div>
      );
}

export default Profile;