import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Catalog from './components/Catalog/Catalog';
import Every from './components/Every/Every';
import People from './components/People/People';
import Testimonials from './components/Testimonials/Testimonials';
import Get from './components/Get/Get';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Enjoy from './components/Enjoy/Enjoy';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Catalog />
      <Every />
      <Enjoy />
      <People />
      <Testimonials />
      <Get />
    </div>
  );
}

export default App; 
