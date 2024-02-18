import React from "react";

const ImageCard = ({image, onImageClick}) => {
  return (
    <div className="img-item" onClick={() => onImageClick(image)}>
      <img src={image.urls.small} alt={image.alt}/>
    </div>
  );
};

export default ImageCard;
