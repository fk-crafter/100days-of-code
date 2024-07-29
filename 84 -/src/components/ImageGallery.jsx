import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import image1 from '../assets/box.jpg';
import image2 from '../assets/box2.jpg';
import image3 from '../assets/box3.jpg';
import image4 from '../assets/box4.jpg';
import image5 from '../assets/box5.jpg';
import image6 from '../assets/box6.jpg';
import image7 from '../assets/box7.jpg';

const ImageGallery = ({ selectedConsoles, searchQuery }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [notification, setNotification] = useState(null);
  const imageRefs = useRef([]);

  const images = [
    { src: image1, title: "The Last Of Us Part I", description: "A post-apocalyptic action-adventure game where Joel and Ellie traverse the infected United States. Amid exploration, combat, and survival, they form an emotional bond in a ravaged world.", consoles: ["PS4", "PS5"] },
    { src: image2, title: "Pokémon Colosseum", description: "A role-playing game where the player takes on the role of Wes, a former member of Team Snagem. In the Orre region, he must rescue stolen and purified Pokémon using double battles. The game is notable for its darker atmosphere and captivating storyline.", consoles: ["GameCube"] },
    { src: image3, title: "Red Dead Redemption II", description: "An open-world action-adventure game where the player assumes the role of Arthur Morgan, an outlaw and member of the Dutch van der Linde gang. Set in the American West in 1899, the game combines exploration, combat, and immersive interactions in a quest for survival and redemption.", consoles: ["PS4", "Xbox One"] },
    { src: image4, title: "The Legend Of Zelda : Twilight Princess", description: "An action-adventure game where Link must save the kingdom of Hyrule, plunged into darkness by an evil force. Transformed into a wolf, he teams up with Midna to restore the light. The game is distinguished by its dark atmosphere and gameplay rich in puzzles and combat.", consoles: ["Wii", "GameCube"] },
    { src: image5, title: "Super Smash Bros. Ultimate", description: "A crossover fighting game featuring iconic characters from various video game franchises. Players battle on diverse arenas using special attacks and items to knock their opponents off the stage. With a vast roster of fighters and various game modes, it offers a dynamic and competitive fighting experience.", consoles: ["Nintendo Switch"] },
    { src: image6, title: "Horizon Zero Dawn", description: "An action role-playing game set in a post-apocalyptic world dominated by robotic creatures. Players control Aloy, a hunter who ventures into the wilderness to uncover her past and stop a mysterious threat. The game is renowned for its expansive open world, strategic combat, and rich storytelling.", consoles: ["PS4", "PS5"] },
    { src: image7, title: "Halo Infinite", description: "A first-person shooter game that continues the epic story of the Master Chief in the Halo series. Set on the expansive ringworld Zeta Halo, players engage in both single-player campaigns and multiplayer battles, combining exploration, combat, and a gripping narrative. The game is celebrated for its stunning visuals, innovative gameplay, and deep lore.", consoles: ["Xbox One", "Xbox Series X|S"] },
  ];

  const filteredImages = images.filter(image =>
    (selectedConsoles.length === 0 || image.consoles.some(console => selectedConsoles.includes(console))) &&
    (searchQuery === '' || image.title.toLowerCase().includes(searchQuery.toLowerCase()) || image.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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

  const toggleFavorite = (index) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(index)) {
        showNotification('Removed from favorite');
        return prevFavorites.filter(fav => fav !== index);
      } else {
        showNotification('Added to favorite');
        return [...prevFavorites, index];
      }
    });
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
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
      {notification && (
        <div className="fixed bottom-4 left-4 bg-gray-800 text-white px-4 py-2 rounded shadow-lg z-50">
          {notification}
        </div>
      )}
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
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4 relative">
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
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <motion.div
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(index);
                    }}
                    initial={{ scale: 1 }}
                    animate={{ scale: favorites.includes(index) ? 1.5 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FontAwesomeIcon 
                      icon={favorites.includes(index) ? faSolidStar : faRegularStar} 
                      color={favorites.includes(index) ? 'orange' : 'black'} 
                      size="lg"
                    />
                  </motion.div>
                </div>
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
