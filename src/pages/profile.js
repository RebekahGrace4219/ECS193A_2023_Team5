import SideBar from '../components/Shared/SideBar';
import Header from '../components/Shared/Header';
import Line from "../components/Shared/Line";
import StatsExerciseSection from '../components/Profile/StatsExerciseSection';
import MedalsSection from '../components/Profile/MedalsSection';
import ProfileHeader from "../components/Profile/ProfileHeader";
import '../css/Shared/page2.css';
import StatsChallengeSection from '../components/Profile/StatsChallengeSection';
import StatsCalculatorSection from '../components/Profile/StatsCalculatorSection';
import StatsDownloadSection from '../components/Profile/StatsDownloadSection';

/*
<Line></Line>
                        <StatsCalculatorSection/>
*/
const Profile = (props) => {
    return (
        <div id = "Profile" className='Body2Part'>
            <div className = "leftSide2Part">
                <SideBar></SideBar>
            </div>
            <div className = "rightSide2Part">
                <div className = "mainInfo">
                    <Header>{{"title":"Profile", "type":"profile", "onButton":props.children.type}}</Header>
                    <ProfileHeader></ProfileHeader>
                    <Line/>
                    {
                        (props.children.type === "stats") ?
                        <div>
                        <StatsExerciseSection/>
                        <Line></Line>
                        <StatsChallengeSection/>

                        <Line></Line>
                        <StatsDownloadSection/>
                        </div>
                        :
                        <MedalsSection/>
                    }
                </div>
            </div>

        </div>
      );
}

export default Profile;