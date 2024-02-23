import React from "react";
import { Link } from "react-router-dom";
import ConfirmationModal from "./ConfirmationModal";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Navbar({  textColor }) {
  const [showLogoutModal, setShowLogoutModal] = React.useState(false);
  const style = {
    color: textColor,
  };
  const navigate = useNavigate();
  let token;

  const handleLogout = () => {
    localStorage.removeItem("token");
    token = "";
    navigate("/signin");
    toast.success("Logout Successfully.");
  };

  token = localStorage.getItem("token");

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={style}>
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
              {token ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">
                      Weather
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/about">
                      Account
                    </Link>
                  </li>
                 
                  <li className="nav-item">
                    <Link className="nav-link" style={{ cursor: 'pointer' }} onClick={() => setShowLogoutModal(true)}>
                      Logout
                    </Link>
                    <ConfirmationModal
                      action={handleLogout}
                      title="Logout Confirmation"
                      body="Are you sure you want to logout?"
                      showModal={showLogoutModal}
                      handleClose={() => setShowLogoutModal(false)}
                    />
                  </li>
                  
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signin">
                      SignIn
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
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
  );
}

export default Navbar;
