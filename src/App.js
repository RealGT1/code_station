import React from 'react'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';

import Landing from './components/Landing/landing'
//final update
const App = () => {
  return (
    <div>
      <Router>
      <Routes>
      <Route path="/" element ={<Landing />}/>
      </Routes>
      </Router>
      </div>
  )
}

export default App