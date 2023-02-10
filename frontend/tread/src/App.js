import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import axios from 'axios';
import FriendPage  from './pages/friend';
import Login from './pages/login';

function App() {

  return (
    <div>
      <Router>
      <Routes>
        <Route path = "/" element = {<Login/>}/>
        <Route path = "/friendPage" element={<FriendPage/>} />
      </Routes>
      </Router>
      </div>
  );
}
export default App;