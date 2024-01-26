import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { fetchPutHomeAction } from "../redux/actions/actions";
import { Form } from "react-bootstrap";

function HomePutModal({ postData, show, handleClose }) {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(postData.text);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    const updatedPost = {
      text: inputValue,
    };

    dispatch(fetchPutHomeAction(postData._id, updatedPost));

    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post {postData._id}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSaveChanges}>
          <Modal.Body>
            <Form.Group controlId="formDescription">
              <Form.Label>Post Content</Form.Label>
              <Form.Control
                autoFocus
                as="textarea"
                name="postText"
                value={inputValue}
                onChange={handleInputValue}
                required
              />
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

export default HomePutModal;
