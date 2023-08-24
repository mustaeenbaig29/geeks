import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import Home from './components/Home/Home';
import Home2 from './components/Home_2/Home2';
import Home3 from './components/Home3/Home3';
import Home4 from './components/Home4/Home4';
import Home5 from './components/Home5/Home5';
import Home6 from './components/Home6/Home6';
import Home7 from './components/Home7/Home7';
import Home8 from './components/Home8/Home8';
import Home9 from './components/Home9/Home9';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(loadingTimeout); // Clear timeout on unmount
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <Element name="section1">
        <Home />
      </Element>
      <Element name="section2">
        <Home2 />
      </Element>
      <Element name="section3">
        <Home3 />
      </Element>
      <Element name="section4">
        <Home4 />
      </Element>
      <Element name="section5">
        <Home5 />
      </Element>
      <Element name="section6">
        <Home6 />
      </Element>
      <Element name="section7">
        <Home7 />
      </Element>
      <Element name="section8">
        <Home8 />
      </Element>
      <Element name="section9">
        <Home9 />
      </Element>
    </div>
  );
};

export default App;
