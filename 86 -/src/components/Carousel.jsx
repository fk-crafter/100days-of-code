import React, { useState, useEffect } from 'react';
import iPhone from '../assets/iphone.png';
import airpodspro from '../assets/airpodspro.png';
import iPad from '../assets/ipad.png';

const products = [
  {
    img: iPhone,
    topic: "iPhone 15 Pro Max",
    shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.",
    detailTitle: "iPhone 13 Pro",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.",
    specifications: [
      { label: "Display", value: "6.1-inch" },
      { label: "Camera", value: "12MP" },
      { label: "Processor", value: "A15 Bionic" },
      { label: "Battery Life", value: "Up to 22 hours" },
      { label: "Charging", value: "MagSafe" },
    ]
  },
  {
    img: iPad,
    topic: "iPad Air",
    shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.",
    detailTitle: "iPad Pro",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.",
    specifications: [
      { label: "Display", value: "11-inch" },
      { label: "Camera", value: "12MP" },
      { label: "Processor", value: "M1 chip" },
      { label: "Battery Life", value: "Up to 10 hours" },
      { label: "Charging", value: "USB-C" },
    ]
  },
  {
    img: airpodspro,
    topic: "AirPods Pro 2",
    shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.",
    detailTitle: "AirPods Pro 2",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.",
    specifications: [
      { label: "Battery Life", value: "Up to 4.5 hours" },
      { label: "Charging", value: "MagSafe" },
      { label: "Compatibility", value: "iOS" },
      { label: "Bluetooth", value: "5.0" },
      { label: "Controls", value: "Touch" },
    ]
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % products.length);
      setIsAnimating(false);
    }, 100);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + products.length) % products.length);
      setIsAnimating(false);
    }, 100);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isAnimating]);

  return (
    <div className="relative overflow-hidden h-[800px] mt-[-50px]">
      <div className="absolute w-[1140px] max-w-[90%] h-[80%] left-1/2 transform -translate-x-1/2">
        {products.map((product, index) => (
          <div
            key={index}
            className={`absolute left-0 w-[70%] h-full transition-all duration-1000 ${
              index === currentIndex ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-90'
            }`}
          >
            <img src={product.img} alt="Carousel Item" className="w-1/2 absolute right-0 top-1/2 transform -translate-y-1/2 transition-all" />
            <div className="absolute top-1/2 transform -translate-y-1/2 opacity-100 pointer-events-auto w-[400px]">
              <div className="text-2xl font-medium">{product.title}</div>
              <div className="text-4xl font-medium">{product.topic}</div>
              <div className="text-sm text-gray-500">{product.shortDescription}</div>
              <button className="mt-4 px-4 py-2 border-b-2 border-gray-500 text-gray-700 hover:bg-gray-200 transition">SEE MORE &#8599;</button>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-56 w-full flex justify-between px-4">
        <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-gray-500 text-lg">&#8249;</button>
        <button onClick={nextSlide} className="w-10 h-10 rounded-full border border-gray-500 text-lg">&#8250;</button>
      </div>
    </div>
  );
};

export default Carousel;
