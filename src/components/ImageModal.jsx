import React from "react";
import { Modal, Button } from "react-bootstrap";

const ImageModal = ({ show, image, onHide }) => {
  if (!image) {
    return null;
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{image.description || "No description"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={image.urls.regular} alt={image.description} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageModal;
