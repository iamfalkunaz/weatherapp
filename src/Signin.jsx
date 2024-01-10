import React from "react";
import Image1 from "./undraw_remotely_2j6y.svg";
import { Link } from "react-router-dom";
import Button from "./shared/Button";
import Heading from "./shared/Heading";
import Checkbox from "./shared/Checkbox";
import Socialicons from "./shared/Socialicons";
import InputFeilds from "./shared/InputFeilds";

function Sginin() {
  return (
    <div className="container-fluid authentication-container">
      <div className="row flex-wrap authentication-row align-items-center">
        <div className="col-lg-6 col-sm-4 image-side">
          <img src={Image1} alt="remotly work.svg img" />
        </div>
        <div className="col-lg-6 col-sm-8 form-side d-flex align-items-center">
          <div className="login-form w-100">
            <Heading data="Sign In" />
            <p>Please SignUp to see weather details.Access the latest forecasts.</p>

            <form action="login" method="post">
              <div className="input-area">
                <div className="form-group">
                  <InputFeilds data="Name" />
                </div>
                <div className="form-group">
                  <InputFeilds data="Password" />
                </div>
              </div>

              <div className="form-group checkbox-area d-flex justify-content-between align-items-center">
                <Checkbox data="Remember me" />
              </div>
              <Button data="signin" />
            </form>
            <p class="text-muted  my-3">
              – You don't have an account ? <Link to="/Signup">SignUp</Link>. –
            </p>
            <Socialicons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sginin;
