import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Catalog.css';
import headphonesImage from './Images/Bitmap.svg';

const Catalog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="Catalog-container" id='demos'>

      {/* Text zoom-in */}
      <div className="content-side" data-aos="zoom-in">
        <h1 className="title">
          Get noise free <br /> sound everytime
        </h1>
        <p className="description">
          Create custom landing pages with Omega that converts more visitors than any website.
          With lots of unique blocks, you can easily build a page without coding.
        </p>

        <div className="features">

          {/* Card 1 zoom-right */}
          <div className="card" data-aos="zoom-in-right" data-aos-delay="150">
            <div className="icon red-bg">■</div>
            <div className="card-text">
              <span className="card-title">50+ Unique Design Blocks</span>
              <span className="card-subtitle">with Carefully Coded</span>
            </div>
          </div>

          {/* Card 2 zoom-left */}
          <div className="card" data-aos="zoom-in-left" data-aos-delay="250">
            <div className="icon blue-bg">📱</div>
            <div className="card-text">
              <span className="card-title">Mobile First Design</span>
              <span className="card-subtitle">on Every Devices</span>
            </div>
          </div>

        </div>
      </div>

      {/* Image zoom-out */}
      <div className="image-side" data-aos="zoom-out" data-aos-delay="300">
        <div className="circle-bg"></div>
        <img src={headphonesImage} alt="Headphones" className="floating-img" />
      </div>

    </div>
  );
};

export default Catalog;
