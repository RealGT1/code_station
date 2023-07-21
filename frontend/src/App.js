import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Getstarted from './components/Get-Started/get-started';
import Landing from './components/Landing/landing'
import Java1 from './components/SelectLang/Javacode/Java1';
import Python1 from './components/SelectLang/Pythoncode/Python1';
import Assembly1 from './components/SelectLang/Assemblycode/Assembly1';


//final update
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/start" element={<Getstarted />} />
          <Route exact path="/javacode" element={<Java1 />} />
          <Route exact path="/pythoncode" element={<Python1 />} />
          <Route exact path="/assemblycode" element={<Assembly1 />} />
          
        </Routes>
      </Router>

    </div>
  )
}

export default App