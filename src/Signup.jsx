import React from "react";
import Image1 from "./undraw_remotely_2j6y.svg";
import { Link } from "react-router-dom";
import Button from "./shared/Button";
import InputFeilds from "./shared/InputFeilds";
import Heading from "./shared/Heading";
import Checkbox from "./shared/Checkbox";
import Socialicons from "./shared/Socialicons";

function Signup() {
  const fun = () => {
    alert("hello");
  };

  return (
    <div className="container-fluid authentication-container">
      <div className="row flex-wrap authentication-row">
        <div className="col-lg-6 col-sm-4 image-side">
          <img src={Image1} alt="remotly work.svg img" />
        </div>

        <div className="col-lg-6 col-sm-8 form-side d-flex align-items-center">
          <div className="login-form w-100">
            <Heading data="Sign Up" />
            <p>
              Please SignUp to see weather details.Access the latest forecasts.
            </p>

            <form action="login" method="post">
              <div className="input-area">
                <div className="form-group  ">
                  <InputFeilds data="Name"/>
                </div>
                <div className="form-group">
                  <InputFeilds  data="Email" />
                </div>
                <div className="form-group">
                  <InputFeilds  data="Password" />
                </div>
              </div>

              <div className="form-group checkbox-area d-flex justify-content-between align-items-center">
                <Checkbox data="Remember me" />
              </div>
              <Button data="Signup" fun={fun} />
            </form>
            <p class="text-muted  my-3">
              – Already have an account ? <Link to="/signin">Log in</Link>. –
            </p>
            <Socialicons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
