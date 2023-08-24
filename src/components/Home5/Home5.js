import React, { useEffect, useRef, useState } from 'react';
import './Home5.css';

const Home5 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(sectionRef.current); 
      }
    });

    observer.observe(sectionRef.current);

    return () => {
      observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className={`home__5 ${isVisible ? 'visible' : ''}`}>
      <div className={`info ${isVisible ? 'animate' : ''}`}>
        <div className={`info__title ${isVisible ? 'animate' : ''}`}>
          <h2>Check out more works by Geeks Invention</h2>
          <div className={`info__text ${isVisible ? 'animate' : ''}`}>
            <p>
              Our case studies describe design and development solutions implemented at our Geeks Invention projects.
              The stories are a valuable resource for those looking to develop their own mobile apps.
            </p>
          </div>
          <button className='capsule__button__h5'>
            See Full Case Study
            <span className='arrow-icon'>➡</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home5;
