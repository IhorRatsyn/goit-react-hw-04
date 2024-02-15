import React, {useState} from "react";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const ImageModal = ({image, onHide }) => {
  if (!image) {
    return null;
  }
  return (

      <Modal
          isOpen={true}
          onRequestClose={onHide}
          style={customStyles}
          contentLabel="Img Modal"
      >
          <img src={image.urls.regular} alt={image.description} />
      </Modal>
  );
};

export default ImageModal;
