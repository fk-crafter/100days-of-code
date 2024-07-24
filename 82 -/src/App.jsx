import React from 'react';
import ImageGallery from './components/ImageGallery';
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen relative">
      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(150,216,280,.5)_100%)]"></div>
      <ImageGallery />
    </div>
  );
};

export default App;
