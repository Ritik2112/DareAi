// src/App.jsx
import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import BookDemo from './Components/BookDemo';
import NewSection from './Components/NewSection';
import AdvantageSection from './Components/AdvantageSection';
import SpeedSearch from './Components/SpeedSearch';
import FeatureSection from './Components/FeatureSection';
import StaticTestimonials from './Components/StaticTestimonials.jsx';
import WhyTrustUs from './Components/WhyTrustUs';
import ScrollAnimation from './Components/ScrollAnimation'; // <-- Import the animation wrapper
import './App.css';
import Geo from './Components/Geo'; // Import the Geo component

function App() {
  return (
    <div className="App">
      <main className="container">
        <Navbar />

        <ScrollAnimation>
          <HeroSection />
        </ScrollAnimation>

        <ScrollAnimation>
          <FeatureSection />
        </ScrollAnimation>

        <ScrollAnimation>
          <SpeedSearch />
        </ScrollAnimation>

   <ScrollAnimation>
          <Geo />
        </ScrollAnimation>

     
       

        <section id="benefits">
          <ScrollAnimation>
            <NewSection />
          </ScrollAnimation>
        </section>

        <section id="features">
          <ScrollAnimation>
            <AdvantageSection />
          </ScrollAnimation>
        </section>

        <section id="reviews">
          <ScrollAnimation>
                  <StaticTestimonials />

          </ScrollAnimation>
        </section>

        <section id="Book-A-Demo">
          <ScrollAnimation>
            <BookDemo />
          </ScrollAnimation>
        </section>
        <WhyTrustUs />

      </main>
    </div>
  );
}

export default App;
