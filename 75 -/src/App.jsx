import Reac from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WomenPresentation from './components/WomenPresentation';
import MenHeroSection from './components/MenHeroSection';
import MenPresentation from './components/MenPresentation';
import BottomSection from './components/BottomSection';
import Footer from './components/Footer';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const HomePage = () => (
  <>
    <HeroSection />
    <WomenPresentation />
    <MenHeroSection />
    <MenPresentation />
    <BottomSection />
    <Footer />
  </>
);

export default App;
