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
      {/*{images.length > 0 && <LoadMoreBtn onClick={loadMoreImages} />}{" "}*/}
    </div>
  );
};

export default ImageGallery;
