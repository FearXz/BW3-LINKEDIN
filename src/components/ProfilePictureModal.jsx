import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";

function ProfilePictureModal({ show, handleClose }) {
  const myProfile = useSelector((state) => state.profile.myProfile);

  const [imageData, setImageData] = useState(null);

  const handleSaveChanges = async (e) => {
    e.preventDefault();

    if (!imageData) {
      return;
    }
    try {
      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append("profile", imageData);

      // Make the POST request using fetch
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${myProfile._id}/picture`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_TOKEN,
        },
      });
      if (!response.ok) {
        throw new Error(`Failed to upload profile picture: ${response.statusText}`);
      }
      handleClose();
    } catch (error) {
      console.error("Error uploading profile picture:", error);
    }
  };
  const handleclosefile = () => {
    handleClose();
    setImageData(null);
  };

  return (
    <>
      <Modal show={show} onHide={handleclosefile}>
        <Modal.Header closeButton>
          <Modal.Title>Choose image </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSaveChanges}>
          <Modal.Body>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Choose a profile picture</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={(e) => setImageData(e.target.files[0])} />
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

export default ProfilePictureModal;
