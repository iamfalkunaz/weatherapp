import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="header">
      <div class="container d-flex justify-content-center align-items-center">
        <div class="card  main-card p-4">
          <h1>SignUp</h1>
          <form>
            <div class="form-group form-gap">
              <input
                type="text"
                class="form-control"
                id="fullName"
                placeholder="Enter full name"
              />
            </div>
            <div class="form-group form-gap">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group form-gap">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" class="btn btn-primary form-gap">
              Create Account
            </button>
          </form>
          <p class="mt-3">
            By signing up, you agree to the Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
      <p className="endline">Already have an account ? <Link className="endlinelink"  to="/Signup">Login</Link>.</p>
    </div>
  );
}

export default Signup;
