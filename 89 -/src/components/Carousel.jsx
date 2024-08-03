import React, { useState, useEffect } from 'react';
import iPhone from '../assets/iphone.png';
import airpodspro from '../assets/airpodspro.png';
import iPad from '../assets/ipad.png';

const products = [
  {
    img: iPhone,
    topic: "iPhone 15 Pro Max",
    shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    img: iPad,
    topic: "iPad Air",
    shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    img: airpodspro,
    topic: "AirPods Pro 2",
    shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % products.length);
    setShowDetails(false);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + products.length) % products.length);
    setShowDetails(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      nextSlide();
    } else if (event.key === 'ArrowLeft') {
      prevSlide();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="relative overflow-hidden h-[800px] mt-1 bg-white">
      <div className="absolute w-full h-full flex justify-center items-center">
        {products.map((product, index) => {
          const isActive = index === currentIndex;
          const isPrev = (index + 1) % products.length === currentIndex;
          const isNext = (index - 1 + products.length) % products.length === currentIndex;

          return (
            <div
              key={index}
              className={`absolute transition-transform duration-1000 ${isActive ? 'opacity-100 transform scale-100 z-20' : 'opacity-0'} ${isPrev || isNext ? 'opacity-50 blur-md transform scale-75' : ''}`}
              style={{ transform: `translateX(${(index - currentIndex) * 100}%)`, transition: 'transform 1s, opacity 1s, filter 1s' }}
            >
              <img src={product.img} alt={product.topic} className="w-full h-full object-contain" />
              {isActive && (
                <div className="absolute top-1/2 left-[-25rem] transform -translate-y-1/2 text-left">
                  <div className="text-4xl font-medium">{product.topic}</div>
                  <div className="text-sm text-gray-500">{product.shortDescription}</div>
                  <button
                    className="mt-4 px-4 py-2 border-b-2 border-gray-500 text-gray-700 hover:bg-gray-200 transition"
                    onClick={toggleDetails}
                  >
                    {showDetails ? 'HIDE DETAILS' : 'SEE MORE'} &#8599;
                  </button>
                  <div
                    className={`mt-4 text-gray-700 transition-opacity duration-500 ease-in-out ${
                      showDetails ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'
                    }`}
                    style={{ overflow: 'hidden' }}
                  >
                    {product.details}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="absolute top-1/2 w-full flex justify-between px-4 transform -translate-y-1/2">
        <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-gray-500 text-lg">&#8249;</button>
        <button onClick={nextSlide} className="w-10 h-10 rounded-full border border-gray-500 text-lg">&#8250;</button>
      </div>
    </div>
  );
};

export default Carousel;
