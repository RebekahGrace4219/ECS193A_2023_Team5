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
            {
                (props.children.type === "stats") ?
                <div className = "middleSide3Part">
                    <Header>{{"title":"Profile", "type":"profile"}}</Header>
                    <Line/>
                    <StatsSection/>
                </div>
                :
                <div className = "middleSide3Part">
                    <Header>{{"title":"Profile", "type":"profile"}}</Header>
                    <Line/>
                    <MedalsSection/>
                </div>

            }
            <div className = "rightSide3Part">
                <SuggestionBox>{{"type":"medal"}}</SuggestionBox>
            </div>
        </div>
      );
}

export default Profile;