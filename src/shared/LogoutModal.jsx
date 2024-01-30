import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function LogoutModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  let token;

  const handleLogout = () => {
    localStorage.removeItem("token");
    token = "";
    navigate("/signin");
   toast.success("Logout Successfully.");
  };
  return (
    <>
      <li onClick={handleShow}>Logout</li>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Are you sure you want to logout? 
        <div className="d-flex justify-content-end">
        <Button variant="success" onClick={handleLogout} style={{ marginRight: '10px' }}>
            Yes
          </Button>
          <Button variant="dark" onClick={handleClose}>
            No
          </Button>
        </div>
       </Modal.Body>
       
      </Modal>
    </>
  );
}

export default LogoutModal;
