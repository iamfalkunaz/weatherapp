import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import InputFeilds from "./shared/InputFeilds";
import Textarea from "./shared/Textarea";
import Navbar from "./shared/Navbar";
import ConfirmationModal from "./shared/ConfirmationModal";
import Button from "react-bootstrap/Button";
import Footer from "./shared/Footer";

function About() {
  const [isEditable, setIsEditable] = useState(false);
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);
  const [userId, setUserId] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    bio: "",
    birthDate: "",
    oldPassword: "",
    newPassword: "",
  });
  const navigate = useNavigate();

  // State to keep a copy of the original data
  const [originalData, setOriginalData] = useState({});

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    console.log("Stored User ID:", storedUserId);

    setUserId(storedUserId);

    if (storedUserId) {
      fetchUserData(storedUserId);
    } else {
      // If no userID is found, handle appropriately
      console.error("No user ID found in localStorage");
      toast.error("User not identified");
    }
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(
      `http://localhost:2022/user/about/${userId}`
       //`https://server-phi-two.vercel.app/user/about/${userId}`
      );
      setData(response.data.data);
      setOriginalData(response.data.data); // Set original data here
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error("Error fetching user data.");
    }
  };

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const toggleEditMode = () => {
    setIsEditable(!isEditable);
  };

  const handleSave = async () => {
    if (!userId) {
      toast.error("User not identified");
      return;
    }
    const { name, email, oldPassword, newPassword, phone, bio, birthDate } =
      data;
    const updateData = {
      name,
      email,
      oldPassword,
      newPassword,
      phone,
      bio,
      birthDate,
    };

    try {
      await axios.put(`http://localhost:2022/user/about/${userId}`, updateData);
      toast.success("Information updated successfully");
      console.log("Updating data:", updateData);

      setOriginalData(data);
      setIsEditable(false);
    } catch (error) {
      console.error("Error updating user information:", error);
      toast.error("Error updating information.");
    }
  };

  const handleAccountDeletion = async () => {
    try {
      await axios.delete(`http://localhost:2022/user/${userId}`);
      toast.success("Account deleted successfully");
      localStorage.removeItem("userId"); // Remove the userId from localStorage
      navigate("/signup"); 
    } catch (error) {
      console.error("Error deleting account:", error);
      toast.error("Failed to delete account.");
    }
  };

  // Function to handle cancel action
  const handleCancel = () => {
    setData(originalData);
    setIsEditable(false);
  };
  const handleDeleteClick = () => {
    console.log("Delete button clicked");
    setShowDeleteAccountModal(true);
  };

  return (
    <>
      <div className="about-us">
        <Navbar />
        <div className="container ">
          <div className="row gutters about-data">
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 first-card">
              <div className="card h-100">
                <div className="card-body">
                  <div className="account-settings">
                    <div className="user-profile">
                      <h5 className="user-name">{data.name}</h5>
                      <h6 className="user-email">{data.email}</h6>
                    </div>
                    <div className="about">
                      <h5>About</h5>
                      <p>{data.bio}</p>
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: "center", marginBottom: "0" }}>
                  <Button
                    variant="outline-danger"
                    onClick={handleDeleteClick}
                    style={{ alignSelf: "center", margin: "20px 0" }}
                  >
                    Delete Account
                  </Button>
                  <ConfirmationModal
                    action={handleAccountDeletion}
                    title="Delete Account Confirmation"
                    body="Are you sure you want to delete your account? This action cannot be undone."
                    showModal={showDeleteAccountModal}
                    handleClose={() => setShowDeleteAccountModal(false)}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
                <div className="card-body">
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mb-2 text-primary">
                        Update your Personal Details
                      </h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="Name"> Name</label>
                        <InputFeilds
                          data="Name"
                          name="name"
                          value={data.name}
                          onChange={handleInputChange}
                          disabled={!isEditable}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="email">Email</label>
                        <InputFeilds
                          data="Email"
                          name="email"
                          value={data.email}
                          onChange={handleInputChange}
                          disabled={!isEditable}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="phone">Phone</label>
                        <InputFeilds
                          data="Phone"
                          name="phone"
                          value={data.phone}
                          onChange={handleInputChange}
                          disabled={!isEditable}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mt-3 mb-2 text-primary">
                        Change Password
                      </h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="c-password">Old Password</label>
                        <InputFeilds
                          data="Old Password"
                          name="oldPassword"
                          value={data.oldPassword}
                          onChange={handleInputChange}
                          disabled={!isEditable}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="n-password">New Password</label>
                        <InputFeilds
                          data="New Password"
                          name="newPassword"
                          value={data.newPassword}
                          onChange={handleInputChange}
                          disabled={!isEditable}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mt-3 mb-2 text-primary">Info</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <Textarea
                          label="Bio"
                          name="bio"
                          value={data.bio}
                          onChange={handleInputChange}
                          disabled={!isEditable}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="birth">Date-of-Birth</label>
                        <InputFeilds
                          data="Birth Date"
                          name="birthDate"
                          value={data.birthDate}
                          onChange={handleInputChange}
                          disabled={!isEditable}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  d-flex justify-content-end">
                      <div className="text-right">
                        {isEditable && (
                          <Button
                            variant="outline-secondary"
                            onClick={handleCancel}
                          >
                            Cancel
                          </Button>
                        )}
                        <Button
                          variant="outline-primary"
                          onClick={isEditable ? handleSave : toggleEditMode}
                          style={{ marginLeft: isEditable ? "10px" : "0" }}
                        >
                          {isEditable ? "Save" : "Edit"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
