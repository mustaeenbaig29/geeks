import React, { useEffect, useRef, useState } from 'react';
import './Home4.css';

const Home4 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(sectionRef.current); // Unobserve after becoming visible
      }
    });

    observer.observe(sectionRef.current);

    return () => {
      observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className={`home_4 ${isVisible ? 'visible' : ''}`}>
      <div className='left__cont'>
        <img src='https://geeksinvention.com/assets/v3/industry-education.webp' alt='Education' />
      </div>
      <div className='right__cont'>
        <div className={`right__cont__txt ${isVisible ? 'visible' : ''}`}>
          <h3>Smart Education</h3>
          <p className='subtitle'>Elevate your Education Institution</p>
          <div className='tags'>
            <span>Learning Management</span>
            <span>Course offering</span>
            <span>Professional Training</span>
          </div>
          <div className='content'>
            <p>
              Elevate your education institution with our comprehensive software solutions. Learning management, course
              offerings, professional training, certification, and school management tools to streamline your operations
              and enhance your students' learning experience. Trust us to provide the cutting-edge technology and support
              you need to thrive in the ever-evolving education industry.
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

export default Home4;
