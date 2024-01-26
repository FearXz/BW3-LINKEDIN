import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchPostHomeAction } from "../redux/actions/actions";
import EmojiPicker from "emoji-picker-react";

function HomePutModal({ show, handleClose }) {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    const newPost = {
      text: inputValue,
    };

    dispatch(fetchPostHomeAction(newPost));
    setInputValue("");
    handleClose();
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const onEmojiClick = (event) => {
    setInputValue((prevInput) => prevInput + event.emoji);
    toggleEmojiPicker();

    console.log(event.emoji);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="border-0">
          <Modal.Title>Nome Utente</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSaveChanges}>
          <Modal.Body>
            <Form.Group controlId="formDescription">
              {/* Textarea */}
              <Form.Control
                as="textarea"
                placeholder="Di cosa vorresti parlare?"
                name="postText"
                value={inputValue}
                onChange={handleInputValue}
                required
                className="border-0"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className=" border-0 d-block">
            <div>
              {/* EMOJI section*/}
              <div className="start-0 m-3">
                <Button
                  className=" bg-white border border-0 hover-gray rounded-5 p-1"
                  variant="secondary"
                  style={{ height: "36px", width: "36px" }}
                  onClick={toggleEmojiPicker}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="emoji-medium"
                    aria-hidden="true"
                    role="none"
                    data-supported-dps="24x24"
                    width="24"
                    height="24"
                    fill="gray"
                  >
                    <path d="M8 10.5A1.5 1.5 0 119.5 12 1.5 1.5 0 018 10.5zm6.5 1.5a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zm7.5 0A10 10 0 1112 2a10 10 0 0110 10zm-2 0a8 8 0 10-8 8 8 8 0 008-8zm-8 4a6 6 0 01-4.24-1.76l-.71.76a7 7 0 009.89 0l-.71-.71A6 6 0 0112 16z"></path>
                  </svg>
                </Button>
                {showEmojiPicker && (
                  <div className=" position-absolute">
                    <EmojiPicker onEmojiClick={onEmojiClick} />
                  </div>
                )}
              </div>
              {/* Other action section*/}
              <div className=" start-0">
                <Button
                  variant="light"
                  className="border-0 text-black rounded-circle me-2 modalButtonHover"
                  style={{ height: "56px", width: "56px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="image-medium"
                    role="none"
                    data-supported-dps="24x24"
                    fill="black"
                    width="24"
                    height="24"
                  >
                    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                  </svg>
                </Button>
                <Button
                  variant="light"
                  className="border-0 text-black rounded-circle me-2 modalButtonHover"
                  style={{ height: "56px", width: "56px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="calendar-medium"
                    role="none"
                    data-supported-dps="24x24"
                    fill="black"
                    width="24"
                    height="24"
                  >
                    <path d="M3 3v15c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3H3zm13 1.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-8 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM19 18c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14v9zM7 11h2v2H7v-2zm0 4h2v2H7v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2z"></path>
                  </svg>
                </Button>{" "}
                <Button
                  variant="light"
                  className="border-0 text-black rounded-circle me-2 modalButtonHover"
                  style={{ height: "56px", width: "56px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="starburst-medium"
                    role="none"
                    data-supported-dps="24x24"
                    fill="black"
                    width="24"
                    height="24"
                  >
                    <path d="M22 11.1L20.47 10a1.09 1.09 0 01-.4-1.25l.62-1.81a1.11 1.11 0 00-.7-1.4 1.07 1.07 0 00-.35-.06h-2a1.09 1.09 0 01-1.05-.76l-.59-2A1.09 1.09 0 0015 2a1.11 1.11 0 00-.66.22l-1.69 1.17a1.13 1.13 0 01-1.31 0L9.75 2.22a1.11 1.11 0 00-1.55.16 1.07 1.07 0 00-.2.38L7.41 4.7a1.09 1.09 0 01-1 .76h-2a1.11 1.11 0 00-1.16 1.06 1.34 1.34 0 00.06.4l.63 1.82a1.1 1.1 0 01-.4 1.26L2 11.11a1.1 1.1 0 00-.26 1.53 1.28 1.28 0 00.26.26L3.53 14a1.09 1.09 0 01.4 1.25l-.62 1.8a1.11 1.11 0 00.7 1.4 1.07 1.07 0 00.35.06h2a1.09 1.09 0 011 .76l.64 2a1.12 1.12 0 001.1.73 1.05 1.05 0 00.64-.22l1.6-1.17a1.1 1.1 0 011.31 0l1.6 1.17a1.14 1.14 0 001.75-.55l.62-1.93a1.11 1.11 0 011.05-.76h2a1.11 1.11 0 001.11-1.11 1 1 0 00-.06-.35l-.63-1.82a1.11 1.11 0 01.38-1.26L22 12.89a1.07 1.07 0 00.5-.89 1.1 1.1 0 00-.5-.9zM7 11v-1h10v1zm2 3v-1h6v1z"></path>
                  </svg>
                </Button>{" "}
                <Button
                  variant="light"
                  className="border-0 text-black rounded-circle me-2 modalButtonHover"
                  style={{ height: "56px", width: "56px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="overflow-web-ios-medium"
                    role="none"
                    data-supported-dps="24x24"
                    fill="black"
                    width="24"
                    height="24"
                  >
                    <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                  </svg>
                </Button>
              </div>
              {/* Submit section*/}
              <div className=" d-flex justify-content-end">
                <hr />
                <Button
                  className=" bg-white border border-0 hover-gray rounded-5 p-1"
                  variant="secondary"
                  style={{ height: "36px", width: "36px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="clock-medium"
                    role="none"
                    data-supported-dps="24x24"
                    fill="darkgray"
                    width="24"
                    height="24"
                  >
                    <g>
                      <path d="M2 12A10 10 0 1012 2 10 10 0 002 12zm2 0a8 8 0 118 8 8 8 0 01-8-8z"></path>
                      <path d="M15.1 12.63L13 11.42V7a1 1 0 00-2 0v5a1 1 0 00.51.85l2.59 1.52a1 1 0 101-1.74z"></path>
                    </g>
                  </svg>
                </Button>
                <Button
                  variant="light"
                  className="border-0 text-black rounded-pill modalButtonHover end-0"
                  type="submit"
                >
                  Pubblica
                </Button>
              </div>
            </div>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default HomePutModal;
