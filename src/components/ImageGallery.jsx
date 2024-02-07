import React from "react";
import ErrorMessage from "./ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn";

const ImageGallery = ({ images, loadMoreImages, error }) => {
  if (!images.length) {
    if (error) {
      return <ErrorMessage errorMessage={error} />;
    }
    return null;
  }

  return (
    <>
      {" "}
      <ul className="image-gallery">
        {" "}
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}{" "}
      </ul>{" "}
      {images.length > 0 && <LoadMoreBtn onClick={loadMoreImages} />}{" "}
    </>
  );
};

export default ImageGallery;
