import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [keyword, setKeyword] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const searchImages = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${keyword}&per_page=20&client_id=jyHtcJel_8-BSXel3Wj3NRyx8I2Wm-Lt1taR-d_iRF8`
    );
    setImages(response.data.results);
  };

  const selectImage = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <form onSubmit={searchImages}>
        <input
          type="text"
          placeholder="Search images..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="gallery">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.description}
            onClick={() => selectImage(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <img
            src={selectedImage.urls.regular}
            alt={selectedImage.description}
          />
        </div>
      )}
    </div>
  );
};

export default App;
