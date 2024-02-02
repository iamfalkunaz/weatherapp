import React from "react";
import { Link } from "react-router-dom";

function Footer({ textColor }) {
  const style = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    color: 'black',
    textAlign: 'center',
    padding: '10px',
  };
  return (
    <div>
      <footer className="footer" >
        <div className="footer-content"  style={style}>
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
