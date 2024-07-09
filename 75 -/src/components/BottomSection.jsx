import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faUserTie, faCalendarAlt, faGift } from '@fortawesome/free-solid-svg-icons';
import "../index.css";

const BottomSection = () => {
    return (
        <div className="border-b border-emerald-400 pb-4">
        <div className="text-center py-8 bg-white mt-8">
            <h1 className="text-3xl font-bold mb-8">The Tiffany Experience</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                <div className="flex flex-col items-center">
                    <div className="mb-4">
                        <FontAwesomeIcon icon={faTruck} className="w-12 h-12 text-gray-700" />
                    </div>
                    <h2 className="text-xl font-semibold">Free Shipping and Returns</h2>
                    <p className="text-gray-600 mt-2 mb-4">Complimentary shipping and returns on all orders.</p>
                    <a href="#" className="exp-link text-black font-medium">Learn more &gt;</a>
                </div>

                <div className="flex flex-col items-center">
                    <div className="mb-4">
                        <FontAwesomeIcon icon={faUserTie} className="w-12 h-12 text-gray-700" />
                    </div>
                    <h2 className="text-xl font-semibold">Tiffany at Your Service</h2>
                    <p className="text-gray-600 mt-2 mb-4">Expert advisors from our customer service are at your disposal.</p>
                    <a href="#" className="exp-link text-black font-medium">Contact us &gt;</a>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mb-4">
                        <FontAwesomeIcon icon={faCalendarAlt} className="w-12 h-12 text-gray-700" />
                    </div>
                    <h2 className="text-xl font-semibold">Schedule an Appointment</h2>
                    <p className="text-gray-600 mt-2 mb-4">We'll guide you for your appointments in-store.</p>
                    <a href="#" className="exp-link text-black font-medium">Schedule now &gt;</a>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mb-4">
                        <FontAwesomeIcon icon={faGift} className="w-12 h-12 text-gray-700" />
                    </div>
                    <h2 className="text-xl font-semibold">The Iconic Blue Box</h2>
                    <p className="text-gray-600 mt-2 mb-4">Your Tiffany purchase comes inside our iconic Blue Box.</p>
                    <a href="#" className="exp-link text-black font-medium">Explore all gifts &gt;</a>
                </div>
            </div>
        </div>
        </div>
    );
}

export default BottomSection;
