// src/App.jsx
import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import BookDemo from './Components/BookDemo';
import BusinessGrowth from './Components/BusinessGrowth';
import AdvantageSection from './Components/AdvantageSection';
import SpeedSearch from './Components/SpeedSearch';
import FeatureSection from './Components/FeatureSection';
import Newtestimonials from './Components/Newtestimonials';
import WhyTrustUs from './Components/WhyTrustUs';
import ScrollAnimation from './Components/ScrollAnimation'; // <-- Import the animation wrapper
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="container">
        <Navbar />

        <ScrollAnimation>
          <HeroSection />
        </ScrollAnimation>

        <ScrollAnimation>
          <WhyTrustUs />
        </ScrollAnimation>

        <section id="Why-DareAi">
          <ScrollAnimation>
            <FeatureSection />
          </ScrollAnimation>
        </section>

        <section id="What-is-geo">
          <ScrollAnimation>
            <SpeedSearch />
          </ScrollAnimation>
        </section>

        <section id="benefits">
          <ScrollAnimation>
            <BusinessGrowth />
          </ScrollAnimation>
        </section>

        <section id="features">
          <ScrollAnimation>
            <AdvantageSection />
          </ScrollAnimation>
        </section>

        <section id="reviews">
          <ScrollAnimation>
            <Newtestimonials />
          </ScrollAnimation>
        </section>

        <section id="Book-A-Demo">
          <ScrollAnimation>
            <BookDemo />
          </ScrollAnimation>
        </section>
      </main>
    </div>
  );
}

export default App;
