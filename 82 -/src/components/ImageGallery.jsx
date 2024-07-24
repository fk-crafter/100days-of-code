import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import image1 from '../assets/box.jpg';
import image2 from '../assets/box2.jpg';
import image3 from '../assets/box3.jpg';
import image4 from '../assets/box4.jpg';
import image5 from '../assets/box5.jpg';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const imageRefs = useRef([]);

  const images = [
    { src: image1, title: "The Last Of Us Part I", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore dolorem similique nam quae, magnam quod quam nihil quisquam molestiae" },
    { src: image2, title: "Pokémon Colosseum", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore dolorem similique nam quae, magnam quod quam nihil quisquam molestiae" },
    { src: image3, title: "Red Dead Redemption II", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore dolorem similique nam quae, magnam quod quam nihil quisquam molestiae" },
    { src: image4, title: "The Legend Of Zelda : Twilight Princess", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore dolorem similique nam quae, magnam quod quam nihil quisquam molestiae" },
    { src: image5, title: "Super Smash Bros. Ultimate", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempore dolorem similique nam quae, magnam quod quam nihil quisquam molestiae" },
  ];

  const handleClick = (index) => {
    setSelectedImage(index);
  };

  const handleBackClick = () => {
    setSelectedImage(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && selectedImage !== null) {
      handleBackClick();
    }
  };

  useEffect(() => {
    const handleGlobalClick = (event) => {
      if (selectedImage !== null) {
        handleBackClick();
      }
    };

    document.addEventListener('click', handleGlobalClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleGlobalClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <div className="flex justify-center items-center min-h-screen relative">
      {selectedImage !== null && (
        <>
          <button 
            onClick={handleBackClick} 
            className="absolute top-4 left-4 bg-gray-200 p-2 rounded-full shadow-lg cursor-pointer z-20"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M15.75 19.5L8.25 12l7.5-7.5" 
              />
            </svg>
          </button>
        </>
      )}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
        {images.map((image, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <motion.img
              src={image.src}
              alt={image.title}
              className="w-48 h-46 object-cover cursor-pointer"
              style={{
                zIndex: selectedImage === index ? 10 : 1,
                pointerEvents: selectedImage !== null && selectedImage !== index ? 'none' : 'auto',
              }}
              initial={{ opacity: 1 }}
              animate={selectedImage === index ? { y: -80, x: -150 } : { opacity: selectedImage !== null ? 0 : 1 }}
              transition={{ duration: 0.5 }}
              onClick={(e) => {
                e.stopPropagation();
                handleClick(index);
              }}
              ref={el => (imageRefs.current[index] = el)}
            />
            {selectedImage === index && (
              <div
                className="absolute bg-white p-6 rounded-lg shadow-lg z-20"
                style={{ width: '300px', top: '50%', left: '110%', transform: 'translate(-50%, -50%)' }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                <p>{image.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
