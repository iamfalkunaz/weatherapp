import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-icon">
          <i class="fa-solid fa-temperature-half"></i>
         
            <p className="footer-heading">Created by Falak Naz  © 2024 </p>
          </div>
          <div className="footer-social-icon">
              <Link to="#" class="fa fa-facebook-f"></Link>
              <Link to="#" class="fa fa-twitter"></Link>
              <Link to="#" class="fa fa-google"></Link>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
