import React from "react";
import "./Topbar.css"; // Import your CSS file
import logo from './image/logo.jpeg'; // Import the logo image
import { Link } from 'react-router-dom'; 
const Topbar = () => {
  return (
    <div >
    <div className="topbar">
      <div className="left-section">
        <img src={logo} alt="Company Logo" className="logo" width={100} height={100}/><br/>
        
    </div>
      <div className="right-section">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="sign-up-button">
        <Link to="/Signup" > 
          <button style={{ backgroundColor: 'orange', color: 'white' }}>Signup</button>
        </Link>
        </div>
      
      </div>
      
    </div>
    <h1>Find & Research Information Technology and Services Companies in Ivory Coast</h1>
    <h6>Get access to 6sense's database for more than 235 Information Technology and Services companies in Ivory Coast.</h6>
    </div>
   
  );
};

export default Topbar;
