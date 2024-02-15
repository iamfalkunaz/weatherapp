import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ConfirmationModal({ action, title, body, showModal, handleClose }) {
  const navigate = useNavigate();

  const handleAction = () => {
    action();
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <b>{title}</b>
      </Modal.Header>
      <Modal.Body>
        {body}
        <div className="d-flex justify-content-end">
          <Button variant="outline-primary" onClick={handleAction} style={{ marginRight: '10px' }}>Yes</Button>
          <Button variant="outline-dark" onClick={handleClose}>No</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ConfirmationModal;
