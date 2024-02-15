import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageGallery from "./ImageGallery";
import ErrorMessage from "./ErrorMessage";
import ImageModal from "./ImageModal";
import "./App.css";
import SearchBar from "./SearchBar.jsx";
import Loader from "./Loader.jsx";
import LoadMoreBtn from "./LoadMoreBtn.jsx";
import {getGallery} from "./requests.js";

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
      if(query !== ''){
        fetchData()
      }
    }, [page, query]);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getGallery(query, page)
      setImages((prevImages) => [...prevImages, ...response.data.results]);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (query) => {
    setImages([])
    setQuery(query)
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
        {images.length ? <ImageGallery images={images} onImageClick={handleImageClick} /> : <ErrorMessage errorMessage={error} /> }
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
