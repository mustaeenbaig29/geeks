import React, { useEffect, useRef } from 'react';
import './Home2.css';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

const Home2 = () => {
  const sectionRef = useRef(null);

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
    <section ref={sectionRef} className={`home_2`}>
      <div className='left__cont'>
     <LeftContent/>
      </div>
      <div className='right__cont'>
       <RightContent/>
      </div>
    </section>
  );
};

export default Home2;
