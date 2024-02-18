import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const LoaderComponent = () => {
  return (
    <InfinitySpin type="TailSpin" color="#00BFFF" height={50} width={50} />
  );
};

const Loader = () => (
  <div className="loader">
    <LoaderComponent />
  </div>
);

export default Loader;
