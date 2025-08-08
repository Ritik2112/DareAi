import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import BookDemo from './Components/BookDemo';
import NewSection from './Components/NewSection';
import AdvantageSection from './Components/AdvantageSection';
import SpeedSearch from './Components/SpeedSearch';
import FeatureSection from './Components/FeatureSection';
import StaticTestimonials from './Components/StaticTestimonials.jsx';
import WhyTrustUs from './Components/WhyTrustUs';
import ScrollAnimation from './Components/ScrollAnimation';
import './App.css';
import Geo from './Components/Geo';
import Footer from './Components/Footer.jsx';

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Set the breakpoint to 1024px to cover both mobile and tablet devices
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize); // Update on resize
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      <main className="container">
        <Navbar />

        <ScrollAnimation>
          <div className="section-spacing">
            <HeroSection />
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <section id="Why-DareAi" className="section-spacing">
            <FeatureSection />
          </section>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="section-spacing">
            <SpeedSearch />
          </div>
        </ScrollAnimation>

        {/* The Geo section will not be visible on screens up to 1024px wide */}
        {!isSmallScreen && (
          <ScrollAnimation>
            <section id="What-is-geo" className="section-spacing">
              <Geo />
            </section>
          </ScrollAnimation>
        )}

        <section id="benefits" className="section-spacing">
          <ScrollAnimation>
            <NewSection />
          </ScrollAnimation>
        </section>

        <section id="features" className="section-spacing">
          <ScrollAnimation>
            <AdvantageSection />
          </ScrollAnimation>
        </section>

        <section id="reviews" className="section-spacing">
          <ScrollAnimation>
            <StaticTestimonials />
          </ScrollAnimation>
        </section>

        <section id="Book-A-Demo" className="section-spacing">
          <ScrollAnimation>
            <BookDemo />
          </ScrollAnimation>
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default App;