import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Image1 from "./undraw_remotely_2j6y.svg";
import { Link, useNavigate } from "react-router-dom";
import Button from "./shared/Button";
import InputFeilds from "./shared/InputFeilds";
import Heading from "./shared/Heading";
import Checkbox from "./shared/Checkbox";
import Socialicons from "./shared/Socialicons";

function Signup() {
  const [checked, setChecked] = useState(false);
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
    // if (e.target.value.length === 3) {
    //} setError("");
  };

  const handleSubmit = async (e) => {
    if (data.name === "" || data.email === "" || data.password === "") {
      toast.error("All fields required");
      return;
    }

    e.preventDefault();
    setIsLoading(true);

    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      const data = await axios.post(
        "https://server-phi-two.vercel.app/user/signup",
        userData
      );

      setChecked(!checked);
      console.log("user created successfully", data);
      navigate("/signin");

      if (data) {
        setData({
          name: (data.name = ""),
          email: (data.email = ""),
          password: (data.password = ""),
        });
        toast.success("Signup successfully.");
      }
    } catch (error) {
      console.log("something wrong!", error);
      toast.error("something wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
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
                  disabled={checked === false || isLoading}
                  data={
                    isLoading ? (
                      
                      "loading..."
                    ) : (
                      "Signup"
                    )
                  }
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
