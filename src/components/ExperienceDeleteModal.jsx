import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeleteExpAction } from "../redux/actions/actions";
import { Button, Modal } from "react-bootstrap";

function ExperienceDeleteModal({ expData, show, handleClose }) {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.profile.myProfile);

  const handleDelete = () => {
    dispatch(fetchDeleteExpAction(myProfile._id, expData._id));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Experience</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Sei sicuro di voler cancellare questa Experience? <br />
        {expData.role}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ExperienceDeleteModal;
