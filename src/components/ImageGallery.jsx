import React from "react";
import ErrorMessage from "./ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn";
import ImageCard from "./ImageCard.jsx";
// import ImageCard from "./ImageCard.jsx";

const ImageGallery = ({ images, loadMoreImages, error, onImageClick }) => {
  console.log(images)
  if (!images.length) {
    if (error) {
      return <ErrorMessage errorMessage={error} />;
    }
    return null;
  }

  return (
    <div>
      <ul className="image-gallery">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} onImageClick={onImageClick}/>
        ))}
      </ul>
      {images.length > 0 && <LoadMoreBtn onClick={loadMoreImages} />}{" "}
    </div>
  );
};

export default ImageGallery;
