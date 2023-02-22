import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './pages/login';
import Profile from './pages/profile';
import SignUp from './pages/signUp';
import Challenge from './pages/challenge';
import ProfileSettings from './pages/profileSettings';
import "./App.css";
import AddChallenge from './pages/addChallenge';

function App() {

  return (
    <div id = "page">
      <Router>
      <Routes>
        <Route path = "/" element = {<Login/>}/>
        <Route path = "/signUpPage" element = {<SignUp/>} />
        <Route path = "/profilePage" element = {<Profile/>} />
        <Route path = "/profileSettingsPage" element = {<ProfileSettings/>} />
        <Route path = "/currentChallengePage" element = {<Challenge>{{"ifCurrentChallenge":true}}</Challenge>} />
        <Route path = "/weeklyChallengePage" element = {<Challenge>{{"ifCurrentChallenge":false}}</Challenge>} />
        <Route path = "/addChallengePage" element = {<AddChallenge/>}/>
      </Routes>
      </Router>
      </div>
  );
}
export default App;