import React from "react";
import {  Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <section className="vh-100" style={{ backgroundColor: "#f4f4f4" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-5">
            <div className="card text-white" style={{ backgroundColor: "#eaeaea" }}>
              <div className="card-body p-md-3">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-8 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-warning">Sign up</p>
                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                       
                        <div className="form-outline flex-fill mb-0 text-dark">
                        <label className="form-label" htmlFor="form3Example1c">Name</label>
                          <input type="text" id="form3Example1c" className="form-control" placeholder="Enter your name....."/>
                         
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        
                        <div className="form-outline flex-fill mb-0 text-dark">
                        <label className="form-label" htmlFor="form3Example3c">Email*</label>
                          <input type="email" id="form3Example3c" className="form-control" placeholder="Enter your Email....."/>
                          
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                       
                        <div className="form-outline flex-fill mb-0 text-dark">
                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                          <input type="password" id="form3Example4c" className="form-control" placeholder="Please Enter Password......"/>
                            <a className="flex-row align-items-left text-warning">Forget your password?</a>
                        </div>
                      </div>

                     
                      
                       <div className="form-check d-flex justify-content-center mb-5 text-dark">
                        <input className="form-check-input me-2 text-dark" type="checkbox" value="" id="form2Example3c" />
                        <label className="form-check-label text-dark" htmlFor="form2Example3">
                          I agree all statements in 
                        </label>
                      </div>

                  <div className="d-flex justify-content-center d-Inline-flex  gap-4 col-xl-12 col-lg-12 ">
                  <Link to="/"><Button className="btn btn-dark btn-lg mb-4" type="button">
                  Get started
                  </Button></Link>
                 </div>
                 <div className="text-dark text-center"> Already have an account?<Link to="/Login" className="text-warning">Login in</Link></div>
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

export default Signup;
