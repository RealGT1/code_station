import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';

import Landing from './components/Landing/landing'

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