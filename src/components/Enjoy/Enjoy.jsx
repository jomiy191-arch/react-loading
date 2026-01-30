import React, { useEffect } from 'react';
import './Enjoy.css';
import rasm1 from './Images/1.svg';
import rasm2 from './Images/2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Enjoy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="enjoy-section" id='div'>
      <div className="enjoy-content">
        {/* Text */}
        <div className="enjoy-text" data-aos="fade-up">
          <h1>Enjoy your music</h1>
          <p>
            Create custom landing pages with Omega that convert more visitors than any website. 
            With lots of unique blocks, you can easily build a page without coding.
          </p>
        </div>

        {/* Images */}
        <div className="enjoy-images">
          <div className="image-container" data-aos="fade-right">
            <img className="image-large" src={rasm1} alt="Enjoy your music" />
          </div>
          <div className="image-container" data-aos="fade-left">
            <img className="image-small" src={rasm2} alt="Enjoy your music" />
          </div>
        </div>
      </div>

      {/* Floating shapes */}
      <div className="floating-shape shape1"></div>
      <div className="floating-shape shape2"></div>
    </section>
  );
};

export default Enjoy;
