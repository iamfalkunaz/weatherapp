import React from 'react'
import { Link } from "react-router-dom";
import Logout from './Logout';

function Navbar({ textColor }) {
  const style = {
    color: textColor,
  };
    let token;

    token = localStorage.getItem("token");
  return (
    <div>
       <nav className="navbar navbar-expand-lg"  style={style}>
          <div className="container">
            <a className="navbar-brand text-white" href="#">
              <i className="fa-solid fa-cloud-moon icon"></i>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Weather
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                {token ? (
                  <li className="nav-item">
                    <div className="nav-link logout">
                      <Logout/>
                    </div>
                  </li>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/signin">
                        SignIn
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Signup">
                        SignUp
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
