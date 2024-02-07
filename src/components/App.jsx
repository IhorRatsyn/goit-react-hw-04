import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageGallery from "./ImageGallery";
import ErrorMessage from "./ErrorMessage";
import ImageModal from "./ImageModal";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=nature&page=${page}&per_page=20&client_id=jyHtcJel_8-BSXel3Wj3NRyx8I2Wm-Lt1taR-d_iRF8`
        );
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page]);

  const handleSearch = (query) => {
    setImages([]);
    setPage(1);
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${query}&page=1&per_page=20&client_id=jyHtcJel_8-BSXel3Wj3NRyx8I2Wm-Lt1taR-d_iRF8`
      )
      .then((response) => {
        setImages(response.data.results);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
  };

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <>
      <Header onSubmit={handleSearch} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMore} isLoading={isLoading} />
      )}
      {selectedImage && (
        <ImageModal image={selectedImage} onModalClose={handleModalClose} />
      )}
    </>
  );
};

export default App;
