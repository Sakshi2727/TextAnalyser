
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import React, { useState } from 'react'
import Alert from './components/Alerts'
// import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showalert("Dark mode enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showalert("Light mode enabled", "success")
    }
  }
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  // alert is object
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
      <Router>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} aboutText="AboutTextUtils" />
        <Alert alert={alert} />
        <div className="container my-3">

          <Routes>
            <Route exact path="/about" element={<About />} />


            <Route exact path="/" element={<Textform showalert={showalert} heading="Enter the text to analyze" mode={mode} />} />


          </Routes>

        </div >
      </Router>

    </>
  );
}

export default App;
