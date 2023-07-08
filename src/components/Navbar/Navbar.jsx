import React, { useState } from "react";
import "./navbar.css";
import BedtimeTwoToneIcon from "@mui/icons-material/BedtimeTwoTone";


const Navbar = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };
  return (
    <div className="title">
      Code
      <span className="t2">Station</span>
      <button className="Button1">Sign In</button>
      <div className="icons">
        <BedtimeTwoToneIcon />
      </div>
    </div>
  );
};

export default Navbar;
