import React from 'react'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Getstarted from './components/Get-Started/get-started';
import Landing from './components/Landing/landing'
//final update
const App = () => {
  return (
    <div>
      <Router>
      <Routes>
      <Route path="/" element ={<Landing />}/>
      <Route path="/start" element ={<Getstarted />}/>
      </Routes>
      </Router>
      </div>
  )
}

export default App