import React from "react";
import heroImg from '../assets/HeroImg.jpg';
import '../index.css';

const HeroSection = () => {
    return ( 
        <div className="hero-section flex justify-center items-center mt-4 relative">
            <img 
                src={heroImg} 
                alt="Image de la section héros"
                className="hero-image rounded-2xl"
                
            />
            <div className="absolute bottom-32 text-center">
                <h2 className="text-3xl font-bold mb-4 text-black">New Collections</h2>
                <p className="text-lg mb-4 text-black ">Women's high Jewelry Collection 2024</p>

                <button className="btn relative overflow-hidden px-4 py-2 rounded-full border border-black transition-colors duration-500 hover:bg-slate-950">
  <span className="text-black relative z-10">Discover the Creations</span>
  <span className="absolute top-0 left-0 w-0 h-full bg-slate-950 transition-all origin-left duration-500"></span>
</button>

            </div>
        </div>
    );
}
 
export default HeroSection;