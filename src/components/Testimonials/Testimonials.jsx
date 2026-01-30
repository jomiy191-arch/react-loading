import React from 'react';
import Slider from 'react-slick';
import rasm5 from './Images/ayol.png';
import rasm from './Images/negr.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      text: "OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.",
      author: "Jonathan Taylor",
      position: "CEO at Creativex",
      photo: rasm
    },
    {
      text: "OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.",
      author: "Marie Stanley",
      position: "Digital Marketer, Writer",
      photo: rasm5
    },
    {
      text: "This is another amazing testimonial. I love using Omega for my business.",
      author: "Samuel Green",
      position: "Product Manager",
      photo: rasm
    },
    {
      text: "Omega saved me so much time! Building landing pages has never been easier.",
      author: "Lisa Brown",
      position: "Designer",
      photo: rasm5
    },
    {
      text: "I highly recommend Omega to everyone looking to increase conversions.",
      author: "Michael Lee",
      position: "CEO at StartupX",
      photo: rasm
    },
    {
      text: "The support and design options are incredible. My team loves it.",
      author: "Sarah White",
      position: "Marketing Lead",
      photo: rasm5
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h1>What users say</h1>
          <p>Create custom landing pages with Omega that converts more visitors than any website.</p>
        </div>

        <div className="testimonials-slider">
          <Slider {...settings}>
            {testimonials.map((t, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial-card">
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-author">
                    <img src={t.photo} alt={t.author} className="author-photo"/>
                    <div className="author-info">
                      <h4>{t.author}</h4>
                      <span>{t.position}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
