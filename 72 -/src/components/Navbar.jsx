import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "../index.css";

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);
    const searchBarRef = useRef(null);

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    const handleClickOutside = (event) => {
        if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
            setShowSearch(false);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setShowSearch(false);
        }
    };

    useEffect(() => {
        if (showSearch) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [showSearch]);

    return ( 
        <div className='mt-6 ml-4 mr-4 bg-slate-950 rounded-2xl relative'>
            <div className='flex justify-between items-center px-4 py-2'>
                <div className="categories">
                    <ul className="category-menu flex space-x-9 font-semibold text-white">
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">All</a></li>
                        <li><a href="#">Shows</a></li>
                    </ul>
                </div>

                <div className="logo-container">
                    <h1 className='text-2xl text-white'>Logo</h1>
                </div>

                <div className="user-actions">
                    <ul className="action-menu flex space-x-9 font-bold text-white">
                        <li><a href="#" onClick={toggleSearch}>Search</a></li>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#"><FontAwesomeIcon className="icon" icon={faCartShopping} /></a></li>
                    </ul>
                </div>
            </div>
            <div ref={searchBarRef} className={`search-bar ${showSearch ? 'show' : ''}`}>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full p-2 rounded"
                />
            </div>
        </div>
    );
}

export default Navbar;
