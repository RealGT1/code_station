import React from "react";
import "./navbar.css";
import BedtimeTwoToneIcon from "@mui/icons-material/BedtimeTwoTone";
import { Tooltip } from "@mui/material";

const Navbar = () => {
  
  return (
    <div className="title">
      Code
      <span className="t2">Station</span>
      <button className="Button1">Sign In</button>
      <div className="icons">
      <Tooltip title="You kidding me?!" followCursor>
        <BedtimeTwoToneIcon />
        </Tooltip>
      </div>
    </div>
  );
};

export default Navbar;
