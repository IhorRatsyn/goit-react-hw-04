import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const ImageModal = ({ image, onHide }) => {
  if (!image && image.urls && image.description) {
    return null;
  }
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onHide}
      style={customStyles}
      contentLabel="Img Modal"
    >
      <img src={image.urls.regular} alt={image.description} />
    </Modal>
  );
};

export default ImageModal;

ImageModal.propTypes = {
  image: PropTypes.object.isRequired,
  onHide: PropTypes.func.isRequired,
};
