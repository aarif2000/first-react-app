import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert'
import React, {useState} from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#3a373b'
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")

    }
  }
  return (
  <>
  <Router>
    <Navbar mode={mode} toggleMode= {toggleMode} />
    <Alert alert= {alert}/>
    <div className= "container my-2">
    <Routes>
          <Route exact path="/about" element = { <About/>}>
          </Route>
          <Route exact path="/" element = {<TextForm/>}>
          </Route>
          <Route exact path="/home" element = {<TextForm/>}>
          </Route>
    </Routes>
    </div>
  </Router>
  </>
  );
}

export default App;
