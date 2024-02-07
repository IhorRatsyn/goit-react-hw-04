import React from "react";

const ErrorMessage = ({ errorMessage }) => {
  return (
    <div className="error-message">
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorMessage;
