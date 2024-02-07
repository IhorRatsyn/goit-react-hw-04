import React, { useState } from "react";
import { toast } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      toast.error("Please enter text to search for images");
      return;
    }
    onSubmit(inputValue);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
