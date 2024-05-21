import React from "react";
import Image1 from "../assets/men-neck.png";
import Image2 from "../assets/men-bague.png";
import Image3 from "../assets/men-watch.png";

import "../index.css";

const MenPresentation = () => {
    return (
        <div className="border-b border-emerald-400 pb-4">
        <div className="presentation-images flex flex-col sm:flex-row justify-center gap-8 items-center mt-7">
            <div className="text-center group">
                <img 
                    src={Image1} 
                    alt="Image 1" 
                    className="presentation-image w-64 h-64 rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-95 group-hover:shadow-lg cursor-pointer" 
                />
                <h1 className="presentation-txt text-lg font-bold mt-2 transition duration-300 ease-in-out group-hover:opacity-75 group-hover:text-emerald-500">
                    Tiffany HardWear
                </h1>
                <p className="text-black transition duration-300 ease-in-out group-hover:opacity-75">
                Link Necklace
                </p>
            </div>

            <div className="text-center group">
                <img 
                    src={Image2} 
                    alt="Image 2" 
                    className="presentation-image w-64 h-64 rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-95 group-hover:shadow-lg cursor-pointer" 
                />
                <h1 className="presentation-txt text-lg font-bold mt-2 transition duration-300 ease-in-out group-hover:opacity-75 group-hover:text-emerald-500">
                    Tiffany T True
                </h1>
                <p className="transition duration-300 ease-in-out group-hover:opacity-75">
                Narrow Ring
                </p>
            </div>

            <div className="text-center group">
                <img 
                    src={Image3} 
                    alt="Image 3" 
                    className="presentation-image w-64 h-64 rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-95 group-hover:shadow-lg cursor-pointer" 
                />
                <h1 className="presentation-txt text-lg font-bold mt-2 transition duration-300 ease-in-out group-hover:opacity-75 group-hover:text-emerald-500">
                    Tiffany X Patek Philipp
                </h1>
                <p className="transition duration-300 ease-in-out group-hover:opacity-75">
                Mechanical Watch
                </p>
            </div>
        </div>
        </div>
    );
}

export default MenPresentation;
