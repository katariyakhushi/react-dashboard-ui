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
      <div  >
      
      <select className="dropdown">
        <option value="" className="option"> option</option>
        <option value="option1" className="option">Option 1</option>
        <option value="option2"  className="option">Option 2</option>
        <option value="option3"  className="option">Option 3</option>
      </select>
     </div>
        <div className="sign-up-button">
        <Link to="/Signup" > 
          <button style={{ backgroundColor: 'orange', color: 'white', }}>Signup</button>
        </Link>
        </div>
      
      </div>
      
    </div>
    <div className="information">
       <h1 style={{marginLeft :'60px', fontSize:'50px'}}><b>Find & Research Information Technology and Services Companies in Ivory Coast</b></h1>
    <h6 style={{marginLeft :'60px',fontSize:'20px'}}>Get access to 6sense's database for more than 235 Information Technology and Services companies in Ivory Coast.</h6>
    </div>
   
   
    </div>
   
  );
};

export default Topbar;
