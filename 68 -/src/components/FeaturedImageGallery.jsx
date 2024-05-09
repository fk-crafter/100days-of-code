import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import "../index.css";

export function FeaturedImageGallery() {
  const data = [
    {
      imgelink:
        "https://i.ibb.co/c3fWCvV/louis-vuitton-hotel.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/vks3gZ6/crystal-shops-las-vegas-15-ar.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/T249SV0/vitesse-voiture-luxe-par-batiment-moderne-au-crepuscule-ai-generative-188544-8048.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/v49SYnd/hotel-louis-vuitton-paris.jpg",
    },
    {
      imgelink:
        "https://i.ibb.co/j64xmn1/Le-Magasins-d-Herm-s-Hong-Long-par-RDAI-Paris-2-715x410.jpg",
    },
  ];

  const [active, setActive] = useState("https://i.ibb.co/c3fWCvV/louis-vuitton-hotel.jpg");
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div className={`flex justify-center items-center h-screen ${isNightMode ? 'bg-gray-950' : 'bg-gray-100'}`}>
      <div className="p-8 border border-gray-300 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className={`text-2xl ${isNightMode ? 'text-white' : 'text-amber-900'} font-bold`}>React Image Gallery</h1>
          <button onClick={toggleNightMode} className={`p-2 ${isNightMode ? 'bg-gray-950 text-white' : 'text-black'} rounded-md`}>
            {isNightMode ? <FontAwesomeIcon icon={faMoon} size="lg" /> : <FontAwesomeIcon icon={faSun} size="lg" />}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <img className="w-full h-auto rounded-lg shadow-md object-cover object-center" src={active} alt=""/>
          </div>
          <div className="md:col-span-1 grid grid-cols-3 gap-4">
            {data.map(({ imgelink }, index) => (
              <div key={index}>
                <img onClick={() => setActive(imgelink)} src={imgelink} className={`w-full h-auto rounded-lg cursor-pointer transition duration-300 transform hover:scale-105 ${active === imgelink ? 'border-4 border-slate-950' : ''}`} alt="gallery-image"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}