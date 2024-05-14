import React from "react";
import Image1 from "../assets/1.png";
import Image2 from "../assets/bague2.png";
import Image3 from "../assets/collier3.png";

import "../index.css";

const MenPresentation = () => {
    return (
        <div className="presentation-images flex flex-col sm:flex-row justify-center gap-8 items-center mt-7">
            <div className="text-center group">
                <img 
                    src={Image1} 
                    alt="Image 1" 
                    className="presentation-image w-64 h-64 rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-95 group-hover:shadow-lg cursor-pointer" 
                />
                <h1 className="presentation-txt text-lg font-bold mt-2 transition duration-300 ease-in-out group-hover:opacity-75 group-hover:text-emerald-500">
                    T by Tiffany
                </h1>
                <p className="text-black transition duration-300 ease-in-out group-hover:opacity-75">
                    Bracelet jonc étroit à charnière
                </p>
            </div>

            <div className="text-center group">
                <img 
                    src={Image2} 
                    alt="Image 2" 
                    className="presentation-image w-64 h-64 rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-95 group-hover:shadow-lg cursor-pointer" 
                />
                <h1 className="presentation-txt text-lg font-bold mt-2 transition duration-300 ease-in-out group-hover:opacity-75 group-hover:text-emerald-500">
                    Tiffany Setting
                </h1>
                <p className="transition duration-300 ease-in-out group-hover:opacity-75">
                    La bague de fiançailles emblématique
                </p>
            </div>

            <div className="text-center group">
                <img 
                    src={Image3} 
                    alt="Image 3" 
                    className="presentation-image w-64 h-64 rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-95 group-hover:shadow-lg cursor-pointer" 
                />
                <h1 className="presentation-txt text-lg font-bold mt-2 transition duration-300 ease-in-out group-hover:opacity-75 group-hover:text-emerald-500">
                    Tiffany HardWear
                </h1>
                <p className="transition duration-300 ease-in-out group-hover:opacity-75">
                    Collier à maillon
                </p>
            </div>
        </div>
    );
}

export default MenPresentation;
