import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchPutExpAction } from "../redux/actions/actions";
import { Form } from "react-bootstrap";

function ExperienceModal({ expData, show, handleClose }) {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.profile.myProfile);

  const [formData, setFormData] = useState({
    role: expData.role || "",
    company: expData.company || "",
    startDate: "",
    endDate: "",
    description: expData.description || "",
    area: expData.area || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Perform your PUT request with the updated data
    const updatedExperience = {
      role: formData.role,
      company: formData.company,
      startDate: formData.startDate,
      endDate: formData.endDate,
      description: formData.description,
      area: formData.area,
    };

    // Dispatch an action to update the profile in Redux state
    dispatch(fetchPutExpAction(myProfile._id, expData._id, updatedExperience));

    // Close the modal
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Experience Settings</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSaveChanges}>
          <Modal.Body>
            <Form.Group controlId="formRole">
              <Form.Label>Role</Form.Label>
              <Form.Control type="text" name="role" value={formData.role} onChange={handleInputChange} required />
            </Form.Group>

            <Form.Group controlId="formCompany">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" name="company" value={formData.company} onChange={handleInputChange} required />
            </Form.Group>

            <Form.Group controlId="formArea">
              <Form.Label>Area</Form.Label>
              <Form.Control type="text" name="area" value={formData.area} onChange={handleInputChange} required />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formStartDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="Date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEndDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control type="Date" name="endDate" value={formData.endDate} onChange={handleInputChange} required />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default ExperienceModal;
