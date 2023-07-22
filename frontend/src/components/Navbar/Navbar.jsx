import React from "react";
import "./navbar.css";
import BedtimeTwoToneIcon from "@mui/icons-material/BedtimeTwoTone";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store"; // Replace with the correct path to your reduxSetup.js file
import BoltIcon from '@mui/icons-material/Bolt';

const Navbar = () => {
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userName = useSelector((state) => state.user.name); // Make sure the 'name' field exists in your 'user' slice

  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch the logout action when the "Logout" button is clicked
    dispatch(userActions.logout());
  };

  const handleLogin = () => {
    const fakeUsername = "JohnDoe"; // Replace this with the actual username you have available
    dispatch(userActions.login(fakeUsername));
  };
  

  return (
    <div className="nava">
      <div className="navaa">
        <div className="title">
          Code <span className="t2">Station</span>
        </div>
      </div>
      <div className="navb">
        <div>
          {!isUserLoggedIn ? (
            <Link to="/signin">
              <button className="Button1">Sign In</button>
            </Link>
          ) : (
            <div>
              <span className="user-name"><BoltIcon/></span>
              <Link to="/">
                <button className="Button1" onClick={handleLogout}>Logout</button>
              </Link>
            </div>
          )}
        </div>

        <div className="icons">
          <Tooltip title="You kidding me?!" followCursor>
            <BedtimeTwoToneIcon className="navicon" />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
