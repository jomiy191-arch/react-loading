import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Catalog from './components/Catalog/Catalog';
import Every from './components/Every/Every';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animatsiya davomiyligi
      easing: 'ease-in-out',
      once: true, // faqat bir marta animatsiya
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Catalog />
      <Every />
    </div>
  );
}

export default App; // 👈 ENG MUHIM QATOR
