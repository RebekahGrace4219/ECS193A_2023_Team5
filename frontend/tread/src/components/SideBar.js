import '../css/sideBar.css'
const SideBar = () => {

    return (
        <div className = "sideBarClass">
            <div id = "sideBarTreadLogo"><img id = "treadLogo" src = "https://i.imgur.com/5SSwq0U.png" alt = "Tread logo"/></div>
            <div id = "sideBarButtons">
                <div id = "sideBarChallenges">
                    <button className = "sideBarButtonClass"  id = "sideBarButtonChallenges">
                        <img className = "sideBarButtonClassInner"  src = "https://i.imgur.com/orph0OI.png" alt = "Button for Challenges"/>
                    </button>
                </div>
                <div id = "sideBarSocial">
                    <button className = "sideBarButtonClass" id = "sideBarButtonSocial">
                        <img className = "sideBarButtonClassInner"  src = "https://i.imgur.com/GR3dM2t.png" alt = "Button for Social"/>
                    </button>
                </div>
                <div id = "sideBarSettings">
                    <button className = "sideBarButtonClass" id = "sideBarButtonSettings">
                        <img className = "sideBarButtonClassInner" src = "https://i.imgur.com/4XiFFVT.png" alt = "Button for Settings"/>
                    </button>
                </div>
            </div>
        </div>
      );
}

export default SideBar;