import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from './store';
import Auth from './Auth/Auth';
import Getstarted from './components/Get-Started/get-started';
import Landing from './components/Landing/landing';
import Java1 from './components/SelectLang/Javacode/Java1';
import Python1 from './components/SelectLang/Pythoncode/Python1';
import Assembly1 from './components/SelectLang/Assemblycode/Assembly1';

function App() {
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log('isUserLoggedIn', isUserLoggedIn);

  useEffect(() => {
    if (localStorage.getItem('userId')) {
      dispatch(userActions.login());
    }
  }, [dispatch]);

  return (
    <div>
      <section>
        <Router>
          <Routes>
            {!isUserLoggedIn ? (
              <>
                <Route exact path="/" element={<Landing />} />
                <Route exact path="/start" element={<Getstarted />} />
                <Route exact path="/signin" element={<Auth />} />
              </>
            ) : (
              <>
                <Route exact path="/" element={<Getstarted />} />
                <Route exact path="/javacode" element={<Java1 />} />
                <Route exact path="/pythoncode" element={<Python1 />} />
                <Route exact path="/assemblycode" element={<Assembly1 />} />
              </>
            )}
          </Routes>
        </Router>
      </section>
    </div>
  );
}

export default App;

