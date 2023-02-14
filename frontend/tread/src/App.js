import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import FriendPage  from './pages/friend_old';
import Login from './pages/login';
import Profile from './pages/profile';
import "./App.css"

function App() {

  return (
    <div id = "page">
      <Router>
      <Routes>
        <Route path = "/" element = {<Login/>}/>
        <Route path = "/friendPage" element={<FriendPage/>} />
        <Route path = "/profilePage" element = {<Profile/>} />
      </Routes>
      </Router>
      </div>
  );
}
export default App;