import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="spinner">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
