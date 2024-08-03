import React from 'react';
import Carousel from './components/Carousel';
import './index.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="font-poppins bg-gray-100">
      <Navbar />
      <Carousel />
    </div>
  );
};

export default App;
