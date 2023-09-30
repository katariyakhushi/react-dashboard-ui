import React from 'react';
import './Footer.css'; // Import the CSS file
import logo from '../image/logo.jpeg';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const MyFooter = () => {
  return (
    <footer className="custom-footer shadow">
      <div className="container py-4">
        <div className="row text-center align-items-center">
          <div className="col-md-4">
            <div className="custom-logo d-flex align-items-center">
              <img alt="logo" src={logo} width="30px" className="me-3" />
              <span className="h4 font-weight-bold">Revmonk</span>
            </div>
          </div>
          <div className="col-md-8">
            <div className="mt-4 custom-copyright">
              <span className="h4 font-weight-bold">&copy; Devwares, 2023. All rights reserved.</span>
              <div className="d-flex justify-content-center mt-2 custom-social-icons">
                <a href="#" className="text-white me-3"><FaFacebook /></a>
                <a href="#" className="text-white me-3"><FaTwitter /></a>
                <a href="#" className="text-white"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
