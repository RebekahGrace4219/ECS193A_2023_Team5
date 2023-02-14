import "../css/userSettingsButton.css"

const UserSettingsButton = () => {

    return (
        <div id = "UserSettingsButton">
            <div>
                <img id = "UserSettingButtonProfileImage" src = "https://i.imgur.com/7vaxEiJ.png"/>
            </div>
            <div id = "userSettingNaming">
                <p id ="userSettingDisplayName">Rebekah Grace</p>
                <p id ="userSettingUsername">@BronzeTiger#4219</p>
            </div>
            <div id = "userSettingButtonSection">
                <button id = "dropDownButton"><img src = "https://i.imgur.com/B5Dnylx.png"/></button>
            </div>
        </div>
    );
}


export default UserSettingsButton;