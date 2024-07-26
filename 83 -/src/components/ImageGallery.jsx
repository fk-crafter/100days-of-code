import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import image1 from '../assets/box.jpg';
import image2 from '../assets/box2.jpg';
import image3 from '../assets/box3.jpg';
import image4 from '../assets/box4.jpg';
import image5 from '../assets/box5.jpg';

const ImageGallery = ({ selectedConsoles }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const imageRefs = useRef([]);

  const images = [
    { src: image1, title: "The Last Of Us Part I", description: "Un jeu d'action-aventure post-apocalyptique où Joel et Ellie traversent les États-Unis infestés d'infectés. Entre exploration, combat et survie, ils nouent une relation émotive dans un monde ravagé.", consoles: ["PS4", "PS5"] },
    
    { src: image2, title: "Pokémon Colosseum", description: "Un jeu de rôle où le joueur incarne Wes, un ancien membre de la Team Snagem. Dans la région d'Orre, il doit sauver des Pokémon volés et purifiés en utilisant des combats en double. Le jeu se distingue par son ambiance plus sombre et son intrigue captivante.", consoles: ["GameCube"] },

    { src: image3, title: "Red Dead Redemption II", description: "Un jeu d'action-aventure en monde ouvert où le joueur incarne Arthur Morgan, un hors-la-loi membre du gang de Dutch van der Linde. Situé dans l'Ouest américain en 1899, le jeu mêle exploration, combats et interactions immersives dans une quête de survie et de rédemption.", consoles: ["PS4", "Xbox One"] },

    { src: image4, title: "The Legend Of Zelda : Twilight Princess", description: "Un jeu d'action-aventure où Link doit sauver le royaume d'Hyrule plongé dans les ténèbres par une force maléfique. Transformé en loup, il fait équipe avec Midna pour restaurer la lumière. Le jeu se distingue par son ambiance sombre et son gameplay riche en énigmes et combats.", consoles: ["Wii", "GameCube"] },

    { src: image5, title: "Super Smash Bros. Ultimate", description: "Un jeu de combat crossover réunissant des personnages emblématiques de diverses franchises de jeux vidéo. Les joueurs s'affrontent sur diverses arènes en utilisant des attaques spéciales et des objets pour éjecter leurs adversaires hors du terrain. Avec un vaste roster de combattants et des modes de jeu variés, il offre une expérience de combat dynamique et compétitive.", consoles: ["Nintendo Switch"] },
  ];

  const filteredImages = selectedConsoles.length > 0 
    ? images.filter(image => image.consoles.some(console => selectedConsoles.includes(console))) 
    : images;

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
    <div className="flex flex-col justify-center items-center min-h-screen relative">
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
        {filteredImages.map((image, index) => (
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
                <div className="mt-2">
                  {image.consoles.map(console => (
                    <span key={console} className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full mr-1">{console}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
