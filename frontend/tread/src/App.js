import "./App.css";
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Front from "./pages/front";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import ProfileSettings from "./pages/profileSettings";
import AddChallenge from "./pages/addChallenge";
import AddLeague from "./pages/addLeague";
import Challenge from "./pages/challenge";
import Social from "./pages/social";
import Profile from "./pages/profile";
import League from "./pages/league";

function App() {

  return (
    <div id = "page">
      <Router>
      <Routes>
        <Route path = "/" element = {<Front/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/signUpPage" element = {<SignUp/>} />
        <Route path = "/profileSettingsPage" element = {<ProfileSettings/>} />
        <Route path = "/addChallengePage" element = {<AddChallenge/>} />
        <Route path = "/addLeaguePage" element = {<AddLeague/>} />
        <Route path = "/currentChallengePage" element = {<Challenge>{{"type":"current"}}</Challenge>} />
        <Route path = "/weeklyChallengePage" element = {<Challenge>{{"type":"weekly"}}</Challenge>} />
        <Route path = "/socialFriendPage" element = {<Social>{{"type":"friend"}}</Social>}/>
        <Route path = "/socialLeaguePage" element = {<Social>{{"type":"league"}}</Social>}/>
        <Route path = "/profileFriendPage" element = {<Profile>{{"type":"friend"}}</Profile>} />
        <Route path = "/profileLeaguePage" element = {<Profile>{{"type":"league"}}</Profile>} />
        <Route path = "/profileMedalPage" element = {<Profile>{{"type":"medal"}}</Profile>} />
        <Route path = "/leaguePage" element = {<League></League>}/>
      </Routes>
      </Router>
      </div>
  );
}
export default App;