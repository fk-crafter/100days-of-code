import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "../index.css";

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showAccount, setShowAccount] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const searchBarRef = useRef(null);
    const cartRef = useRef(null);
    const accountRef = useRef(null);

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    const toggleCart = () => {
        setShowCart(!showCart);
    };

    const toggleAccount = () => {
        setShowAccount(!showAccount);
    };

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    const handleClickOutside = (event) => {
        if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
            setShowSearch(false);
        }
        if (cartRef.current && !cartRef.current.contains(event.target)) {
            setShowCart(false);
        }
        if (accountRef.current && !accountRef.current.contains(event.target)) {
            setShowAccount(false);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setShowSearch(false);
            setShowCart(false);
            setShowAccount(false);
            setShowMobileMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className='mt-6 ml-4 mr-4 bg-slate-950 rounded-2xl relative'>
            <div className='flex justify-between items-center px-4 py-2'>
                <div className="flex-1 hidden md:flex">
                    <ul className="category-menu flex space-x-9 font-semibold text-white">
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">All</a></li>
                        <li><a href="#">Shows</a></li>
                    </ul>
                </div>

                <div className="logo-container mx-auto md:mx-0">
                    <Link to="/" className="text-2xl text-white">Logo</Link>
                </div>

                <div className="flex-1 hidden md:flex justify-end">
                    <ul className="action-menu flex space-x-9 font-bold text-white">
                        <li><a href="#" onClick={toggleSearch}>Search</a></li>
                        <li><a href="#" onClick={toggleAccount}>Account</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#" onClick={toggleCart}><FontAwesomeIcon className="icon" icon={faCartShopping} /></a></li>
                    </ul>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-white">
                        <FontAwesomeIcon icon={showMobileMenu ? faTimes : faBars} />
                    </button>
                </div>
            </div>

            {showMobileMenu && (
                <div className="md:hidden">
                    <ul className="category-menu-mobile font-semibold text-white mt-4">
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">All</a></li>
                        <li><a href="#">Shows</a></li>
                        <li><a href="#" onClick={toggleSearch}>Search</a></li>
                        <li><a href="#" onClick={toggleAccount}>Account</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#" onClick={toggleCart}><FontAwesomeIcon className="icon" icon={faCartShopping} /></a></li>
                    </ul>
                </div>
            )}

            <div ref={searchBarRef} className={`search-bar ${showSearch ? 'show' : ''}`}>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full p-2 rounded"
                />
            </div>

            <div ref={cartRef} className={`cart-dropdown ${showCart ? 'show' : ''}`}>
                {cartItems.length === 0 ? (
                    <div className="p-4">
                        <p className="mb-4">Empty</p>
                        <div className="border-t border-gray-200 pt-4">
                            <p className="font-semibold">Tax est. <span className="float-right">Included</span></p>
                            <p className="font-bold">Total <span className="float-right">0€</span></p>
                            <button className="cart-button mt-4 w-full py-2 rounded">View Cart</button>
                        </div>
                    </div>
                ) : (
                    <div className="p-4">
                        {cartItems.map((item, index) => (
                            <div key={index} className="flex items-center mb-4">
                                <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
                                <div>
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-sm text-gray-500">{item.variant}</p>
                                    <p className="font-semibold">{item.price}€</p>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-gray-200 pt-4">
                            <p className="font-semibold">Tax est. <span className="float-right">Included</span></p>
                            <p className="font-bold">Total <span className="float-right">{cartItems.reduce((total, item) => total + item.price, 0)}€</span></p>
                            <button className="cart-button mt-4 w-full py-2 rounded">View Cart</button>
                        </div>
                    </div>
                )}
            </div>

            <div ref={accountRef} className={`account-dropdown ${showAccount ? 'show' : ''}`}>
                <div className="p-4">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full p-2 mb-4 rounded border border-gray-300"
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="w-full p-2 mb-4 rounded border border-gray-300"
                    />
                    <button className="account-button mt-4 w-full py-2 rounded bg-black text-white">Sign In</button>
                    <p className="mt-4 text-center text-gray-600">Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
