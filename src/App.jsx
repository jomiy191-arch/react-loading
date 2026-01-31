import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Catalog from './components/Catalog/Catalog';
import Every from './components/Every/Every';
import People from './components/People/People';
import Testimonials from './components/Testimonials/Testimonials';
import Get from './components/Get/Get';
import Enjoy from './components/Enjoy/Enjoy';

import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>

          <Header />
          <Hero />
          <Catalog />
          <Every />
          <Enjoy />
          <People />
          <Testimonials />
          <Get />

    </>
  );
}

export default App;
