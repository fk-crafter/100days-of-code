import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WomenPresentation from './components/WomenPresentation';
import MenHeroSection from './components/MenHeroSection';
import MenPresentation from './components/MenPresentation';


function App() {
  return (
    <div className='App'>

      <Navbar />

      <div className="content">
        
        <HeroSection/>
        <WomenPresentation/>     
        <MenHeroSection/>
        <MenPresentation/>
        
        <p>Lorem</p>
      </div>
    </div>
  );
}

export default App;