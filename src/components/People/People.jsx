import React, { useEffect, useState } from 'react';
import './People.css';

const People = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="people-section" id='pages'>
      <div className="people-overlay">
        <div className={`people-content ${!isLoaded ? 'loading' : ''}`}>
          <h1>2k+ people are <br /> using this headset</h1>
          <p>
            Create custom landing pages with Omega that converts <br /> more visitors than any website. 
            With lots of unique <br /> blocks, you can easily build a page without coding.
          </p>
          <button className="people-button">Try it now</button>
        </div>
      </div>
    </section>
  );
};

export default People;