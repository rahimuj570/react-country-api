import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ModalReact = ({ data }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.name.common}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Official Name: {data.name.official}</p>
          <p>Independent Status: {data.independent ? "Yes" : "No"}</p>
          <p>Population: {data.population}</p>
          <p>Start of Week: {data.startOfWeek}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalReact;
