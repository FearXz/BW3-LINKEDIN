import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { fetchPostImageHomeAction } from "../redux/actions/actions";

function PostPictureModal({ postData, show, handleClose }) {
  const [imageData, setImageData] = useState(null);
  const dispatch = useDispatch();

  const handleSaveChanges = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("post", imageData);

    dispatch(fetchPostImageHomeAction(postData._id, formData));
    handleClose();
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
              <Form.Label>Image to post</Form.Label>
              <Form.Control accept="image/*" type="file" onChange={(e) => setImageData(e.target.files[0])} />
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

export default PostPictureModal;
