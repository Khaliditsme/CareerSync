import React, { useState } from 'react';
import './App.css';
import AppPage from './pages/first_page/AppPage';
import StudentPortal from './StudentPortal';
import Login from './Login';
import Mainlogin from './mainlogin.js';

function App() {
  const [login, setLogin] = useState(true);

  return (
    // login ? <AppPage setLogin={setLogin}/> : 
    //   <Login />
    // <Login />
    <Mainlogin />
  );
}

export default App;