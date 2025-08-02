// src/App.jsx
import React from 'react';
import Navbar from './Components/Navbar'; // Import your Navbar component
import HeroSection from './Components/HeroSection'; // Import your HeroSection component
import './App.css'; // Assuming you have an App.css for general styling

import BookDemo from './Components/BookDemo';
import BusinessGrowth from './Components/BusinessGrowth';
import AdvantageSection from './Components/AdvantageSection';
import SpeedSearch from './Components/SpeedSearch';



import FeatureSection from './Components/FeatureSection';
import Newtestimonials from './Components/Newtestimonials';

function App() {
  return (
    <div className="App">
    
      <main className="container">
          <Navbar /> {/* Render your Navbar component here */}
      <HeroSection /> {/* Render your HeroSection component here */}
       
   
      
       
      
      
      
      
       
       
        <section id="Why-DareAi" >
             
              <FeatureSection />
       </section>
        <SpeedSearch />
       <BusinessGrowth/>
             
              <section id="features" >

          <AdvantageSection />
        
          
           
          
        </section>

              <Newtestimonials/>
               <section id="Book-A-Demo" >
             
               <BookDemo />
       </section>
       
       
      </main>
    </div>
  );
}

export default App;