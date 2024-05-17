import React from "react";
import profilePic from "../assets/profilpic.png"

const HeroSection = () => {
    return (  
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl" >Fowad Khan</h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Front-end Developer</span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tight">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa enim iste aliquam omnis, accusantium, quisquam minima, quo nobis tempora itaque repudiandae vitae. Omnis quae explicabo rerum veniam ipsa cumque magnam maiores aliquid ratione sapiente blanditiis consectetur, mollitia, velit quas fugiat.</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img src={profilePic} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HeroSection;