import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Getstarted from './components/Get-Started/get-started';
import Landing from './components/Landing/landing'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  userActions } from "./store";
import Auth from './Auth/Auth';

function App() {
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log("isUserLoggedIn", isUserLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(userActions.login());
    } 
  }, [dispatch]);
  return (
    <div>
      <section>
        <Routes>
          {!isUserLoggedIn  && (
            <>
              {" "}
              <Route exact path="/" element={<Landing />} />
              <Route exact path="/start" element={<Getstarted />} />
              <Route exact path="/signin" element={<Auth/>} />
            </>
          )}
          {isUserLoggedIn && (
            <>
              {" "}
              <Route exact path="/" element={<Getstarted />} />
             
            </>
          )}

        </Routes>
      </section>
    </div>
  );
}

export default App;
