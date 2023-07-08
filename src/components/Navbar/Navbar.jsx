import React from "react";
import "./navbar.css";
import BedtimeTwoToneIcon from '@mui/icons-material/BedtimeTwoTone';
const Navbar = () => {
  return (
    <div className="title">
      Code
      <span className="t2">Station</span>
      <button className="Button1">Sign In</button>
      <div className="icons">
      <BedtimeTwoToneIcon className="nightmode"/>
    </div>
    </div>
    
  );
};

export default Navbar;
