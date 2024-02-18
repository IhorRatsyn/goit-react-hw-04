import React from "react";
import ImageCard from "./ImageCard.jsx";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div>
      <ul className="image-gallery">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} onImageClick={onImageClick}/>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
