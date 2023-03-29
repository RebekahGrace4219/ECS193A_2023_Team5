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

            <div className = "rightSide3Part">
                <div className = "centerInfo">
                    <Header>{{"title":"Social Hub", "type":"social", "onButton" : props.children.type}}</Header>
                    <RecentActivity>{{"type":props.children.type}}</RecentActivity>
                    {
                        (props.children.type === "friend") ?
                        <FriendSection></FriendSection>
                        :
                        <LeagueSection/>
                    }
                </div>
                <div className = "rightPadding"></div>
                <div className="sidePart">
                    {
                    (props.children.type === "friend") ?
                        <SuggestionBox>{{"type":"friend"}}</SuggestionBox>

                    :
                        <SuggestionBox>{{"type":"league"}}</SuggestionBox>

                    }
                </div>
            </div>


        </div>
      );
}
export default Social;