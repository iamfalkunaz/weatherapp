import React, { useState } from "react";
import axios from "axios";
import Image1 from "./undraw_remotely_2j6y.svg";
import { Link, useNavigate } from "react-router-dom";
import Button from "./shared/Button";
import InputFeilds from "./shared/InputFeilds";
import Heading from "./shared/Heading";
import Checkbox from "./shared/Checkbox";
import Socialicons from "./shared/Socialicons";

function Signup() {
  const [checked, setChecked] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
    if (
      e.target.value.length === 3
    ) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    if (data.name === "" || data.email === "" || data.password === "") {
      setError("All fields required");
      return;
    }

    e.preventDefault();
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      const data = await axios.post(
        "http://localhost:2022/user/signup",
        userData
      );
      setShowToast(true);
      setChecked(!checked);
      console.log("user created successfully", data);
      navigate("/signin");

      if (data) {
        setData({
          name: (data.name = ""),
          email: (data.email = ""),
          password: (data.password = ""),
        });
      }
    } catch (error) {
      console.log("something wrong!", error);
    }
  };

  //toast remove after 10 seconds

  setTimeout(() => {
    setShowToast(false);
  }, 10000);

  return (
    <>
      <div
        className="position-relative"
        aria-live="polite"
        aria-atomic="true"
        animation="true"
        autohide="true"
        data-bs-delay="10000"
      >
        <div className="toast-container position-absolute top-0 end-0 p-3">
          <div
            className={`toast ${showToast ? "show" : ""}`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <strong className="me-auto">WeatherApp</strong>
            </div>
            <div className="toast-body">Signup successfully.</div>
          </div>
        </div>
      </div>

      <div className="container-fluid authentication-container">
        <div className="row flex-wrap authentication-row">
          <div className="col-lg-6 col-sm-4 image-side">
            <img src={Image1} alt="remotly work.svg img" />
          </div>

          <div className="col-lg-6 col-sm-8 form-side d-flex align-items-center">
            <div className="login-form w-100">
              <Heading data="Sign Up" />
              <p>
                Please SignUp to see weather details.Access the latest
                forecasts.
              </p>
              {error && <p style={{ color: "red" }}>{error}</p>}

              <div>
                <div className="input-area">
                  <div className="form-group  ">
                    <InputFeilds
                      name="name"
                      onChange={handleChange}
                      data="Name"
                      value={data.name}
                    />
                  </div>
                  <div className="form-group">
                    <InputFeilds
                      name="email"
                      onChange={handleChange}
                      data="Email"
                      value={data.email}
                    />
                  </div>
                  <div className="form-group">
                    <InputFeilds
                      name="password"
                      onChange={handleChange}
                      data="Password"
                      value={data.password}
                    />
                  </div>
                </div>

                <div className="form-group checkbox-area d-flex justify-content-between align-items-center">
                  <Checkbox
                    data="Confirmed"
                    checked={checked}
                    onClick={() => setChecked(!checked)}
                  />
                </div>
                
                <Button
                  signUpbtn={checked ? "btn-primary" : "btn-secondary"}
                  disabled={checked === false}
                  data="Signup"
                  onClick={handleSubmit}
                />
              </div>
              <p class="text-muted  my-3">
                – Already have an account ? <Link to="/signin">Log in</Link>. –
              </p>
              <Socialicons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
