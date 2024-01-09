import React from "react";
import Image1 from "./undraw_remotely_2j6y.svg";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="container-fluid authentication-container">
      <div className="row flex-wrap authentication-row">
        <div className="col-lg-6 col-sm-4 image-side">
          <img src={Image1} alt="remotly work.svg img" />
        </div>

        <div className="col-lg-6 col-sm-8 form-side d-flex align-items-center">
          <div className="login-form w-100">
            <h2>Sign Up</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur
              adipisicing.
            </p>
            <form action="login" method="post">
              <div className="input-area">
              <div className="form-group  ">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="FullName"
                    required
                    autofocus
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    required
                    autofocus
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    required
                    autofocus
                  />
                </div>
              </div>

              <div className="form-group checkbox-area d-flex justify-content-between align-items-center">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="remember-me"
                  />
                  <label className="custom-control-label" for="remember-me">
                    Remember me
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                LogIn
              </button>
            </form>
            <p class="text-muted  my-3">– Already have an account ? <Link to="/signin">Log in</Link>. –</p>
            <div class="social-icons ">
              <a href="#" class="fa fa-facebook-f"></a>
              <a href="#" class="fa fa-twitter"></a>
              <a href="#" class="fa fa-google"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
