import SideBar from '../components/Shared/SideBar';
import Header from '../components/Shared/Header';
import Line from "../components/Shared/Line";
import StatsSection from '../components/Profile/StatsSection';
import MedalsSection from '../components/Profile/MedalsSection';
import ProfileHeader from "../components/Profile/ProfileHeader";
import '../css/Shared/page2.css';

const Profile = (props) => {
    return (
        <div id = "Profile" className='Body2Part'>
            <div className = "leftSide2Part">
                <SideBar></SideBar>
            </div>
            <div className = "rightSide2Part">
                <div classname = "main">
                <div className = "mainInfo">
                    <Header>{{"title":"Profile", "type":"profile", "onButton":props.children.type}}</Header>
                    <ProfileHeader></ProfileHeader>
                    <Line/>
                    {
                        (props.children.type === "stats") ?
                        <StatsSection/>
                        :
                        <MedalsSection/>
                    }
                </div>

                </div>
            </div>

        </div>
      );
}

export default Profile;