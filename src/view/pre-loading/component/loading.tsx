import React from "react";
import "../styles/loading.scss";

const Loader = () => {
  return (
    <div className="loading-content">
      <img
        className="loadingImg"
        src={`${window.location.origin}/pizza_home.png`}
      />
      <h1 className="loadingText">Loading...</h1>
      {/*    <div className="spinner"></div> */}
    </div>
  );
};

export default Loader;
