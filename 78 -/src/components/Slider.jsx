import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import greenCharacter from '../assets/green.png';
import redCharacter from '../assets/red.png';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'Green',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
      image: greenCharacter,
      gradient: 'bg-gradient-to-r from-green-400 to-blue-500',
      textGradient: 'text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500'
    },
    {
      title: 'Red',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
      image: redCharacter,
      gradient: 'bg-gradient-to-r from-red-400 to-yellow-500',
      textGradient: 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-900'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence>
        
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
          className={`absolute w-full h-full flex flex-col items-center justify-center ${slides[currentSlide].gradient}`}
        >

          <motion.div
            key={`text-${currentSlide}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center p-5"
          >
            <h2 className={`text-3xl font-bold ${slides[currentSlide].textGradient}`}>{slides[currentSlide].title}</h2>
            <p className="mt-4 text-white">{slides[currentSlide].description}</p>
            <button className="mt-5 px-4 py-2 bg-white text-green-500 rounded-full shadow-lg hover:bg-gray-200 transition-all">View More</button>
          </motion.div>

          <motion.img
            key={`image-${currentSlide}`}
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            initial={{ opacity: 0, y: -100, rotate: 10 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 100, rotate: -10 }}
            transition={{ duration: 1 }}
            className="max-w-xs h-auto mt-5"
          />
        </motion.div>

      </AnimatePresence>
      <button onClick={prevSlide} className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-all">‹</button>
      <button onClick={nextSlide} className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-all">›</button>
    </div>
  );
};

export default Slider;
