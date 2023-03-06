import SideBar from "../components/Shared/SideBar";
import SocialHeader from "../components/Social/SocialHeader";
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
                    <SocialHeader>{{"type":"social"}}</SocialHeader>
                    <RecentActivity>{{"type":"friend"}}</RecentActivity>
                    <FriendSection></FriendSection>
                </div>
                :
                <div className = "middleSide3Part">
                    <SocialHeader>{{"type":"social"}}</SocialHeader>
                    <RecentActivity>{{"type":"league"}}</RecentActivity>
                    <LeagueSection/>
                </div>
            }

            {
                (props.children.type === "friend") ?
                <div className = "rightSide3Part">
                    <UserSettingsButton/>
                    <SuggestionBox>{{"type":"friend"}}</SuggestionBox>
                </div>
                :
                <div className = "rightSide3Part">
                    <UserSettingsButton/>
                    <SuggestionBox>{{"type":"league"}}</SuggestionBox>
                </div>
            }

        </div>
      );
}
export default Social;