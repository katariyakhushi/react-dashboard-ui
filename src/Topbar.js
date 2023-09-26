// Topbar.js
import React from "react";
import "./Topbar.css"; // Import your CSS file

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="left-section">
        <div className="company-name">Company Name</div>
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
