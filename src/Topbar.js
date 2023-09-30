import React from "react";
import "./Topbar.css"; // Import your CSS file
import logo from './image/logo.jpeg'; // Import the logo image

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="left-section">
        <img src={logo} alt="Company Logo" className="logo" width={100} height={50}/>
        
      </div>
      <div className="right-section">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="sign-up-button">
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
