import React from "react";
import avtar from './image/avtar.png'; // Import the logo image
import {  Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <section className="vh-100" style={{ backgroundColor: "#f4f4f4" }}>
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-4">
          <div className="card text-white" style={{ backgroundColor: "#eaeaea" }}>
            <div className="card-body p-md-3">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-12 order-2 order-lg-1">
                 
                  <form className="mx-1 mx-md-4">
                <div className="d-flex flex-row align-items-center mb-4 text-dark">
                  <h1 className="fw-bold mb-4">Log In</h1>
                </div>
                <form>
                  <div className="mb-3 text-dark">
                    <label htmlFor="email" className="form-label">Email*</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter your Email " />
                  </div>
                  <div className="mb-3 text-dark">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your Password" />
                    <a href="#" className="d-block mt-2 text-dark">Forgot password?</a>
                  </div>
                  <div className="text-center my-4 justify-content-center ">   
                 
                  <Link to="/Login"><Button className=" col-xl-12 btn btn-warning" type="button">
                   Log In
                  </Button></Link>
                 
                  </div>
                
                </form>
             
                  
                  
                
                <p className="text-center text-dark">Don't have an account? <a href="/signup" className="text-warning">Create an Account</a></p>
                </form>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
  