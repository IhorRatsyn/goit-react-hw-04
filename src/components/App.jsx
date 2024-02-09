import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageGallery from "./ImageGallery";
import ErrorMessage from "./ErrorMessage";
import ImageModal from "./ImageModal";
import "./App.css";
import SearchBar from "./SearchBar.jsx";
import Loader from "./Loader.jsx";
import LoadMoreBtn from "./LoadMoreBtn.jsx";

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
  }, [page]);

  const fetchData = async (query = 'nature') => {
    setImages([])
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=20&client_id=jyHtcJel_8-BSXel3Wj3NRyx8I2Wm-Lt1taR-d_iRF8`
      );
      setImages((prevImages) => [...prevImages, ...response.data.results]);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (query) => {
    fetchData(query)
    setPage(1);
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
        <SearchBar onSubmit={handleSearch} />
        <ImageGallery images={images} onImageClick={handleImageClick} />
        {isLoading && <Loader />}
        {images.length > 0 && (
            <LoadMoreBtn onClick={handleLoadMore} isLoading={isLoading} />
        )}
        {selectedImage && (
            <ImageModal image={selectedImage} onHide={handleModalClose} />
        )}
      </>
  );
};

export default App;
