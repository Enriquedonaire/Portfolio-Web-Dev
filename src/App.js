import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Cover from './components/cover/Cover'
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Slider from './components/slider/Slider';
import slides from './components/slider/Slides';
import Info from './components/info/Info';
import Footer from './components/footer/Footer';
import './components/slider/Slider.css'

function App() {
  const [scrollHeight, setScrollHeight] =  useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position)
  };

  useEffect(()=> {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [scrollHeight])

  return (
    <Router>
      <div className="App">
        <Navbar isScrolling={scrollHeight} />
          <Cover/>
          <About />
          <Slider slides={slides} />
          <Info />
          <Footer />
      </div>
    </Router>
  );
}

export default App;
