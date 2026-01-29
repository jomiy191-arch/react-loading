import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Catalog.css';
import headphonesImage from './Images/Bitmap.svg';

const Catalog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animatsiya davomiyligi
      once: true, // bir martta animatsiya
      easing: 'ease-out-cubic', // yumshoq animatsiya effekti
    });
  }, []);

  return (
    <div className="Catalog-container">
      {/* Matn pastdan tepaga */}
      <div className="content-side" data-aos="fade-up">
        <h1 className="title">
          Get noise free <br /> sound everytime
        </h1>
        <p className="description">
          Create custom landing pages with Omega that converts more visitors than any website.
          With lots of unique blocks, you can easily build a page without coding.
        </p>

        <div className="features">
          {/* Chapga harakat */}
          <div className="card" data-aos="fade-right" data-aos-delay="100">
            <div className="icon red-bg">■</div>
            <div className="card-text">
              <span className="card-title">50+ Unique Design Blocks</span>
              <span className="card-subtitle">with Carefully Coded</span>
            </div>
          </div>

          {/* O‘ngga harakat */}
          <div className="card" data-aos="fade-left" data-aos-delay="200">
            <div className="icon blue-bg">📱</div>
            <div className="card-text">
              <span className="card-title">Mobile First Design</span>
              <span className="card-subtitle">on Every Devices</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rasm pastdan tepaga biroz sekin */}
      <div className="image-side" data-aos="fade-up" data-aos-delay="300">
        <div className="circle-bg"></div>
        <img src={headphonesImage} alt="Headphones" className="floating-img" />
      </div>
    </div>
  );
};

export default Catalog;
