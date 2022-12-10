import React, {useState} from 'react'
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Text from './components/Text';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  const [mode,setmode] = useState('light')
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setalert(null)
    }, 900);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setmode('dark')
      document.body.style.background='#042743'
    }
    else {
      setmode('light')
      document.body.style.background='#ffffff'
    }
  }

  const changeModeLable = () => {
    if(mode === 'light')
      return 'Enable Dark mode'
    else
      return 'Enable Light mode'
  }

  return (
    <>
        <Router>
          <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} modeLable ={`${changeModeLable()}`}/>
          <Alert alert={alert}/>
          <Routes>
            <Route path="/about" element={<About mode={mode}/>}/>

            <Route path="/textutils" element={<div className="container my-3">
              <Text heading='Text Box' mode={mode} showAlert={showAlert}/>
              </div>}/>
          </Routes>
        </Router>
    </>
  );
}

export default App;
