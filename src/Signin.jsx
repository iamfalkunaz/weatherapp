import React from "react";
import Image1 from './undraw_remotely_2j6y.svg';
import { Link } from "react-router-dom";

function Sginin() {
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={Image1}
              alt="Image"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 contents">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="mb-4">
                  <h3>Sign In</h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                    consectetur adipisicing.
                  </p>
                </div>
                <form action="#" method="post">
                  <div className="form-group first">
                    <label for="username">Username</label>
                    <input type="text" className="form-control form-controls" id="username" />
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                    />
                  </div>
                  <div className="checkboxarea d-flex align-items-center">
                  
                    <label className="control control--checkbox ">
                    <input type="checkbox" id="checked" name="checked" value="Bike" />
                    <span for="checked" className="caption">Remember me</span>
                      
                      <div className="control__indicator"></div>
                    </label>
                    <span className="forgot-pass">
                      <a href="#" className="">
                        Forgot Password
                      </a>
                    </span>
                  </div>
                  <input
                    type="submit"
                    value="Log In"
                    className="btn btn-primary  btn-pp btn-block"
                  />
                  <span className="text-muted">
                    — or login with —
                  </span>
                  <div className="social-login">
                    <a href="#" className="facebook">
                      <span className="mr-3"><i class="fa-brands fa-skype"></i></span>
                    </a>
                    <a href="#" className="twitter">
                    <span className="mr-3"><i class="fa-brands fa-facebook"></i></span>
                    </a>
                    <a href="#" className="google">
                      <span className="mr-3"><i class="fa-brands fa-google"></i></span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sginin;
 