import React from "react";
import { useState } from "react";
import InputFeilds from "./shared/InputFeilds";
import Button from "react-bootstrap/Button";



function AboutUs() {
  const [activeTab, setActiveTab] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <>
      <div className="about-us">
        <div className="container ">
          <div className="row gutters">
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
                <div className="card-body">
                  <div className="account-settings">
                    <div className="user-profile">
                      <div className="user-avatar">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt="Maxwell Admin"
                        />
                      </div>
                      <h5 className="user-name">Yuki Hayashi</h5>
                      <h6 className="user-email">yuki@Maxwell.com</h6>
                    </div>
                    <div className="about">
                      <h5>About</h5>
                      <p>
                        I'm Yuki. Full Stack Designer I enjoy creating
                        user-centric, delightful and human experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
                <div className="card-body">
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mb-2 text-primary">Personal Details</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="Name"> Name</label>
                        <InputFeilds data="Name" value={data.name} />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="email">Email</label>
                        <InputFeilds data="Email" value={data.email} />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="phone">Phone</label>
                        <InputFeilds data="Phone Number" value={data.phone} />
                      </div>
                    </div>
                  </div>
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mt-3 mb-2 text-primary">Change Password</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="c-password">Password</label>
                        <InputFeilds data="Enter Old Password" value={data.password} />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="n-password">New Password</label>
                        <InputFeilds data="Enter new Password" value={data.newpassword} />
                      </div>
                    </div>
                  </div>
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mt-3 mb-2 text-primary">Info</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="bio">Bio</label>
                        <InputFeilds data="Bio" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="birth">Date-of-Birth</label>
                        <InputFeilds data="birth date" />
                      </div>
                    </div>
                  </div>
                  <div className="row gutters">
                    <div
                      className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  d-flex justify-content-end"
                      style={{ marginRight: "40px" }}
                    >
                      <div className="text-right">
                        <Button variant="outline-secondary">Edit</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
