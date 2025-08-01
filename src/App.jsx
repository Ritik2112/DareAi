// src/App.jsx
import React from 'react';
import Navbar from './Components/Navbar'; // Import your Navbar component
import HeroSection from './Components/HeroSection'; // Import your HeroSection component
import './App.css'; // Assuming you have an App.css for general styling
import WhyDareAi from './Components/WhyDareAi';
import BookDemo from './Components/BookDemo';
import BusinessGrowth from './Components/BusinessGrowth';
import AdvantageSection from './Components/AdvantageSection';
import SpeedSearch from './Components/SpeedSearch';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <div className="App">
    
      <main className="container">
          <Navbar /> {/* Render your Navbar component here */}
      <HeroSection /> {/* Render your HeroSection component here */}
   
      
       
      
      
      
      
       
       
        <section id="why-dareaisearch" >
             <WhyDareAi />
             
       </section>
        <SpeedSearch />
       <BusinessGrowth/>
             
              <section id="features" >

          <AdvantageSection />
          
        </section>

              <Testimonials/>
       
        <BookDemo />
      </main>
    </div>
  );
}

export default App;