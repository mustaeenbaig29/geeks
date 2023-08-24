import React, { useEffect, useRef } from 'react';
import './Home.css';
import Navbar from './Navbar';

const Home = () => {
  
  return (
    <div className='home'>
      <Navbar />
      <div className='slogan'>
        <h1 className='page-title'>EMBRACE THE FUTURE</h1>
        <p>Welcome to the Age of Action</p>
      </div>
    </div>
  );
};

export default Home;
