import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./MyModalStyle.css"; // Assicurati di creare un file CSS con il nome MyModalStyle.css

function HomeImagePostModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Apri Editor
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Editor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-content-container">
            <p>Per iniziare, seleziona i file</p>
            <p>Condividi immagini o un solo video nel tuo post.</p>
            <Button variant="primary">Carica dal computer</Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Indietro
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Avanti
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HomeImagePostModal;
