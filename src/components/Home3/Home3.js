import React, { useEffect, useRef, useState } from 'react';
import './Home3.css';
import LeftContent from './LeftContent';

const Home3 = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        sectionRef.current.classList.add('visible');
      }
    });

    observer.observe(sectionRef.current);

    return () => {
      observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className={`home_3`}>
      <div className='left__cont'>
        <LeftContent/>
      </div>
      <div className='right__cont'>
        <div className={`right__cont__txt ${isVisible ? 'visible' : ''}`}>
          <h3>Industrial IoT</h3>
          <p className='subtitle'>Providing a better connected experience</p>
          <div className='tags'>
            <span>Connected manufacturing</span>
            <span>Aviation</span>
            <span>Smart Building</span>
          </div>
          <div className='content'>
            <p>
              Revolutionize your industry with our innovative IoT solutions. Our software development services offer
              connected manufacturing, pollution control, smart transportation, and intelligent farming, agriculture,
              and forestry. With our expertise, you can harness the power of technology to increase efficiency, reduce
              waste, and optimize operations for a sustainable future.
            </p>
          </div>
          <button className='capsule-button'>
            See Full Case Study
            <span className='arrow-icon'>➡</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home3;
