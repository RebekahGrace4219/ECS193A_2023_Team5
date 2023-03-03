import React, {useState} from 'react';

import '../../css/Shared/header.css';
import '../../css/ProfileSettings/ProfileSettingsHeader.css';

import UserSettingsButton from '../Shared/UserSettingsButton';
const ProfileSettingsHeader = () => {

    return (
        <div id = "ProfileSettingsHeader">
            <h1>Profile Settings</h1>
            <UserSettingsButton/>
        </div>
    )
}

export default ProfileSettingsHeader;