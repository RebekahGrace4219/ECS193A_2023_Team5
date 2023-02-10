import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
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