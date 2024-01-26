import { useState } from "react";
import React from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Image1 from "./undraw_remotely_2j6y.svg";
import { Link, useNavigate } from "react-router-dom";
import Button from "./shared/Button";
import Heading from "./shared/Heading";
import Checkbox from "./shared/Checkbox";
import Socialicons from "./shared/Socialicons";
import InputFeilds from "./shared/InputFeilds";

function Sginin() {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
  
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    if (data.email === "" || data.password === "") {
      toast.error("All firlds are required");
      return;
    }

    e.preventDefault();
    const userData = {
      email: data.email,
      password: data.password,
    };

    try {
      const data = await axios.post(
        "https://server-phi-two.vercel.app/user/signin",
        userData
      );

      setChecked(!checked);
      console.log("Signin successfully", data);
      navigate("/");

      if (data) {
        setData({
          email: (data.email = ""),
          password: (data.password = ""),
        });
        toast.success("Signin successfully.");
      }
    } catch (error) {
      console.log("something wrong!", error);
      toast.error("something wrong.");
    }
  };

  return (
    <div className="container-fluid authentication-container">
      <div className="row flex-wrap authentication-row align-items-center">
        <div className="col-lg-6 col-sm-4 image-side">
          <img src={Image1} alt="remotly work.svg img" />
        </div>
        <div className="col-lg-6 col-sm-8 form-side d-flex align-items-center">
          <div className="login-form w-100">
            <Heading data="Sign In" />
            <p>
              Please SignUp to see weather details.Access the latest forecasts.
            </p>

            <div>
              <div className="input-area">
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
                    data="Remember me"
                    checked={checked}
                    onClick={() => setChecked(!checked)}
                  />
              </div>
              <Button
                  signUpbtn={checked ? "btn-primary" : "btn-secondary"}
                  disabled={checked === false}
                  data="SignIn"
                  onClick={handleSubmit}
                />
            </div>
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
