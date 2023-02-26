import "../../css/Shared/userSettingsButton.css"

const UserSettingsButton = () => {
    function logoutDropDown(){
        console.log("TODO = Start dropdown");
    }

    function moveProfilePage(){
        window.location.href = "./profilePage"
    }
    return (
        <div id = "UserSettingsButton" >
            <button id = "UserSettingsLeft" onClick={moveProfilePage}>
                <div>
                    <img id = "UserSettingButtonProfileImage" src = "https://i.imgur.com/7vaxEiJ.png"/>
                </div>
                <div id = "userSettingNaming">
                    <p id ="userSettingDisplayName">Rebekah Grace</p>
                    <p id ="userSettingUsername">@BronzeTiger#4219</p>
                </div>
            </button>
            <div id = "userSettingButtonSection">
                <button className = "dropDownButton" onClick = {logoutDropDown}><img src = "https://i.imgur.com/B5Dnylx.png"/></button>
            </div>
        </div>
    );
}


export default UserSettingsButton;