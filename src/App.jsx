import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import BookDemo from './Components/BookDemo';
import NewSection from './Components/NewSection';
import AdvantageSection from './Components/AdvantageSection';
import SpeedSearch from './Components/SpeedSearch';
import FeatureSection from './Components/FeatureSection';
import StaticTestimonials from './Components/StaticTestimonials.jsx';
import ScrollAnimation from './Components/ScrollAnimation';
import './App.css';
import Geo from './Components/Geo';
import Footer from './Components/Footer.jsx';


function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Helper function to wrap content with or without animation
  const withAnimation = (content) => {
    return isSmallScreen ? content : <ScrollAnimation>{content}</ScrollAnimation>;
  };

  return (
    <div className="App">
      <Navbar />
      <main className="container">
        <div className="section-spacing">
          <HeroSection />
        </div>

       

        <section id="Why-DareAi" className="section-spacing">
          <FeatureSection />
        </section>

        <div className="section-spacing">
          {withAnimation(<SpeedSearch />)}
        </div>

        {!isSmallScreen && (
          <section id="What-is-geo" className="section-spacing">
            {withAnimation(<Geo />)}
          </section>
        )}

        <section id="benefits" className="section-spacing">
          <NewSection />
        </section>

        <section id="features" className="section-spacing">
          {withAnimation(<AdvantageSection />)}
        </section>

        <section id="reviews" className="section-spacing">
          {withAnimation(<StaticTestimonials />)}
        </section>

        <section id="Book-A-Demo" className="section-spacing">
          {withAnimation(<BookDemo />)}
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default App;
