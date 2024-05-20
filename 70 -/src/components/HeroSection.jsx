import React from "react";
import profilePic from "../assets/profilpic.png"
import {motion} from 'framer-motion'

const HeroSection = () => {
    return (  
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 
                        initial={{x: -100, opacity: 0}} 
                        animate={{x: 0, opacity: 1}} 
                        transition={{duration: 0.2, delay: 0.2}} 
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl" >Fowad Khan</motion.h1>

                        <motion.span
                        initial={{x: -100, opacity: 0}} 
                        animate={{x: 0, opacity: 1}} 
                        transition={{duration: 0.2, delay: 0.3}} 
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Front-end Developer</motion.span>
                      
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img 
                        initial={{x: 100, opacity: 0}} 
                        animate={{x: 0, opacity: 1}} 
                        transition={{duration: 0.2, delay: 0.6}}
                        src={profilePic} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HeroSection;
