import React from "react";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

import "./Footer.css"; // Import your custom CSS file
import logo from '../image/logo.jpeg';

const Footer = () => {
  return (
    <footer className="shadow py-5 ">
      <Container className="border border-dark rounded-lg bg-dark text-white " style={{width: '110%', height: '100%'}}>
        <Row className="flex-wrap ">
          <Col xs={12} md={5} className="text-center text-md-start ">
            <div className="  text-dark mt-4 justify-content-lg-start">
              <img src={logo} alt="Company Logo" className="logo mt-4 justify-content-md-center" style={{ width: '40%', height: 'auto' }} />
              
            </div>
            <div className="mt-4 d-flex justify-content-lg-start">
              <Button variant="dark" className="p-2 me-3 bg-white text-dark">
                <i className="bi bi-facebook"></i>
              </Button>
              <Button variant="dark" className="p-2 me-3 bg-white text-dark">
                <i className="bi bi-twitter"></i>
              </Button>
              <Button variant="dark" className="p-2 bg-white text-dark">
                <i className="bi bi-instagram"></i>
              </Button>
            </div>
          </Col>
          <Col xs={6} md={2} className="mt-4 mb-4">
            <p className="h5 mb-4 mt-4" style={{ fontWeight: '600' }}>
              Find more
            </p>
            <div className="cursor-pointer">
              <div>Home</div>
              <div>About</div>
              <div>Company Info</div>
            </div>
          </Col>
          <Col xs={6} md={2} className="mt-4 mb-4">
            <p className="h5 mb-4 mt-4" style={{ fontWeight: '600' }}>
              Follow Us
            </p>
            <div className="cursor-pointer">
              <div className="text-decoration-none">Linkedin</div>
              <div className="text-decoration-none">Twitter</div>
              <div className="text-decoration-none">Instagram</div>
            </div>
          </Col>
          <Col xs={6} md={2} className="mt-4 mb-4">
            <p className="h5 mb-4 mt-4" style={{ fontWeight: '600' }}>
              Contact Us
            </p>
            <div className="cursor-pointer">
              <div><i className="bi bi-geo-alt p-1 text-warning"></i>Ujjain, Madhya Pradesh India</div>
              <div><i className="bi bi-envelope p-2 text-warning"></i>Email: katariyakhushi373@gmail.com</div>
            </div>
          </Col>
          <small className="text-center">&copy; Revmonk, 2023. All rights reserved.</small>
        </Row>
       
      </Container>
      
    </footer>
  );
};

export default Footer;
