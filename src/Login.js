import React from "react";
import loginimg from './image/login img.png'; // Import the logo image
import "./Login.css";

const Login = () => {
  return (
    <section className="vh-100 d-flex align-items-center" style={{ backgroundColor: "#121212" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="card text-white bg-dark rounded-3">
              <div className="card-body p-5">
                <div className="text-center">
                  <img src={loginimg} alt="Company Logo" className="logo mb-3" width={80} height={80} />
                  <h1 className="fw-bold mb-4">Login</h1>
                </div>
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter your Email address" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your Password" />
                    <a href="#" className="d-block mt-2 text-white">Forgot password?</a>
                  </div>
                  <div className="text-center">   <button className="btn btn-warning btn-lg btn-block" type="submit">Login</button></div>
                
                </form>
                <div className="my-4 text-center">
                  <div className="text-hr text-hr--center">
                    <span className="text-hr__text">or login with</span>
                    <hr className="hr-line mx-3" />
                  </div>
                  <div className="d-flex justify-content-center gap-3">
                    <button type="button" className="btn btn-warning ">Facebook</button>
                    <button type="button" className="btn btn-warning">Google</button>
                  </div>
                </div>
                <p className="text-center text-white">Don't have an account? <a href="/signup" className="text-warning">Create an Account</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
  