import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-dots-overlay">
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
