import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchPutProfileAction } from "../redux/actions/actions";
import { Form } from "react-bootstrap";

function MyModal({ show, handleClose }) {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.profile.myProfile);

  const [formData, setFormData] = useState({
    name: myProfile.name || "",
    surname: myProfile.surname || "",
    email: myProfile.email || "",
    username: myProfile.username || "",
    bio: myProfile.bio || "",
    title: myProfile.title || "",
    area: myProfile.area || "",
    image: myProfile.image || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    // Perform your PUT request with the updated data
    const updatedProfile = {
      name: formData.name,
      surname: formData.surname,
      email: formData.email,
      username: formData.username,
      bio: formData.bio,
      title: formData.title,
      area: formData.area,
      image: formData.image,
    };

    // Dispatch an action to update the profile in Redux state
    dispatch(fetchPutProfileAction(updatedProfile));

    // Close the modal
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control type="text" name="surname" value={formData.surname} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" name="username" value={formData.username} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formBio">
              <Form.Label>Bio</Form.Label>
              <Form.Control as="textarea" name="bio" value={formData.bio} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" value={formData.title} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formArea">
              <Form.Label>Località</Form.Label>
              <Form.Control type="text" name="area" value={formData.area} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formImage">
              <Form.Label>Image</Form.Label>
              <Form.Control type="text" name="image" value={formData.image} onChange={handleInputChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;
