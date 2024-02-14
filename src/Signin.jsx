import { useState } from "react";
import React from "react";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";
import Image1 from "./undraw_remotely_2j6y.svg";
import { Link, useNavigate } from "react-router-dom";
import Button from "./shared/Button";
import Heading from "./shared/Heading";
import Checkbox from "./shared/Checkbox";
import Socialicons from "./shared/Socialicons";
import InputFeilds from "./shared/InputFeilds";

function Signin() {
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
      toast.error("All fields are required");
      return;
    }

    e.preventDefault();
    setIsLoading(true);
    const userData = {
      email: data.email,
      password: data.password,
    };

    try {
      const data = await axios.post(
        // "https://server-phi-two.vercel.app/user/signin",
        "http://localhost:2022/user/signin",
        userData
      );

      setChecked(!checked);

      let saveToken = data?.data?.data?.token;
      let saveUserId = data?.data?.data?.userId;
      
      localStorage.setItem("token", saveToken);
      localStorage.setItem("userId", saveUserId);

      if (data) {
        setData({
          email: (data.email = ""),
          password: (data.password = ""),
        });
        toast.success("Signin successfully.");
        navigate("/");
      }
    } catch (error) {
      console.log("something wrong!", error);
      setIsLoading(false);
      toast.error("something wrong.");
    }
  };

  return (
    <>
     <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            success: {
              duration: 2000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
            error: {
              duration: 1000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
      <div className="container-fluid authentication-container">
        <div className="row flex-wrap authentication-row align-items-center">
          <div className="col-lg-6 col-sm-4 image-side">
            <img src={Image1} alt="remotly work.svg img" />
          </div>
          <div className="col-lg-6 col-sm-8 form-side d-flex align-items-center">
            <div className="login-form w-100">
              <Heading data="Sign In" />
              <p>
                Please SignUp to see weather details.Access the latest
                forecasts.
              </p>

              <div>
                <div className="input-area input-query">
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
                      type="text"
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
                  data={isLoading ? "loading..." : "SignIn"}
                  onClick={handleSubmit}
                />
              </div>
              <p className="text-muted  my-3">
                – You don't have an account ? <Link to="/signup">SignUp</Link>.
                –
              </p>
              <Socialicons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
