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
            <div className = "rightSide3Part">
                <div className = "centerInfo">
                    <Header>{{"title":"Profile", "type":"profile", "onButton":props.children.type}}</Header>
                    <Line/>
                    {
                        (props.children.type === "stats") ?
                        <StatsSection/>
                        :
                        <MedalsSection/>
                    }
                </div>
                <div className = "rightPadding"></div>
                <div className="sidePart">
                    <SuggestionBox>{{"type":"medal"}}</SuggestionBox>
                </div>

            </div>

        </div>
      );
}

export default Profile;