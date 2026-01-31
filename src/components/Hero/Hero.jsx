import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Hero.css";

const slides = [
  {
    id: 1,
    title: "Enjoy every single beat on headphone!",
    desc: "For iPhone, iPad and Android users, be sure your product's firmware is up to date through the Bose connect app.",
    price: "$299",
    img: "https://pngimg.com/uploads/headphones/headphones_PNG7649.png",
  },
  {
    id: 2,
    title: "Feel the music like never before",
    desc: "High quality sound with modern design and comfort.",
    price: "$199",
    img: "https://pngimg.com/uploads/headphones/headphones_PNG101982.png",
  },
  {
    id: 3,
    title: "Premium sound experience",
    desc: "Noise cancellation and deep bass technology.",
    price: "$249",
    img: "https://pngimg.com/uploads/headphones/headphones_PNG101983.png",
  },
];

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="hero" id="hero">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000 }}
        loop
        pagination={{ clickable: true }}
        navigation
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-container">
              <div className="hero-left" data-aos="fade-up">
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>

                <div className="hero-price">
                  <span>{slide.price}</span>
                  <button>Add to cart</button>
                </div>
              </div>

              <div
                className="hero-right"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img src={slide.img} alt="Headphone" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
