import SideBar from "../components/Shared/SideBar";
import Header from "../components/Shared/Header";
import RecentActivity from "../components/Social/RecentActivity";
import FriendSection from "../components/Social/FriendSection";
import LeagueSection from "../components/Social/LeagueSection";
import UserSettingsButton from "../components/Shared/UserSettingsButton";
import SuggestionBox from "../components/Shared/SuggestionBox";

import '../css/Shared/page3.css'
const Social = (props) => {

    return (
        <div id = "Social" className='Body3Part'>
            <div className = "leftSide3Part">
                <SideBar></SideBar>
            </div>

            {
                (props.children.type === "friend") ?
                <div className = "middleSide3Part">
                    <Header>{{"title":"Social Hub", "type":"social"}}</Header>
                    <RecentActivity>{{"type":"friend"}}</RecentActivity>
                    <FriendSection></FriendSection>
                </div>
                :
                <div className = "middleSide3Part">
                    <Header>{{"title":"Social Hub", "type":"social"}}</Header>
                    <RecentActivity>{{"type":"league"}}</RecentActivity>
                    <LeagueSection/>
                </div>
            }

            {
                (props.children.type === "friend") ?
                <div className = "rightSide3Part">
                    <SuggestionBox>{{"type":"friend"}}</SuggestionBox>
                </div>
                :
                <div className = "rightSide3Part">
                    <SuggestionBox>{{"type":"league"}}</SuggestionBox>
                </div>
            }

        </div>
      );
}
export default Social;