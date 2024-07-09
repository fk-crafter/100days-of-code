import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import "../index.css";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState('');

  const searchBarRef = useRef(null);
  const cartRef = useRef(null);
  const accountRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();

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
    if (showMobileMenu) {
      setMenuAnimation('menu-exit');
      setTimeout(() => {
        setShowMobileMenu(false);
        setMenuAnimation('');
      }, 300); // La durée doit correspondre à celle de l'animation
    } else {
      setShowMobileMenu(true);
      setMenuAnimation('menu-enter');
    }
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
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
      setMenuAnimation('menu-exit');
      setTimeout(() => {
        setShowMobileMenu(false);
        setMenuAnimation('');
      }, 300);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setShowSearch(false);
      setShowCart(false);
      setShowAccount(false);
      if (showMobileMenu) {
        setMenuAnimation('menu-exit');
        setTimeout(() => {
          setShowMobileMenu(false);
          setMenuAnimation('');
        }, 300);
      }
    }
  };

  const handleSignUpClick = () => {
    setShowAccount(false);
    navigate("/signup");
  };

  const handleCategoryClick = () => {
    setMenuAnimation('menu-exit');
    setTimeout(() => {
      setShowMobileMenu(false);
      setMenuAnimation('');
    }, 300);
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
            <li><a href="#" onClick={handleCategoryClick}>Women</a></li>
            <li><a href="#" onClick={handleCategoryClick}>Men</a></li>
            <li><a href="#" onClick={handleCategoryClick}>All</a></li>
            <li><a href="#" onClick={handleCategoryClick}>Shows</a></li>
          </ul>
        </div>

        <div className="logo-container mx-auto md:mx-0">
          <Link to="/" className="text-2xl text-white">Tiffany's Touch</Link>
        </div>

        <div className="transition-shadow flex-1 hidden md:flex justify-end">
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
        <div className={`md:hidden ${menuAnimation}`} ref={mobileMenuRef}>
          <ul className="category-menu-mobile font-semibold text-white mt-4">
            <li><a href="#" onClick={handleCategoryClick}>Women</a></li>
            <li><a href="#" onClick={handleCategoryClick}>Men</a></li>
            <li><a href="#" onClick={handleCategoryClick}>All</a></li>
            <li><a href="#" onClick={handleCategoryClick}>Shows</a></li>
            <li><a href="#" onClick={toggleSearch}>Search</a></li>
            <li><a href="#" onClick={toggleAccount}>Account</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#" onClick={toggleCart}><FontAwesomeIcon className="icon" icon={faCartShopping} /></a></li>
          </ul>
        </div>
      )}

      <div className={`modal ${showSearch ? 'show' : ''}`} id="searchModal">
        <div className="modal-content" ref={searchBarRef}>
          <span className="close" onClick={() => setShowSearch(false)}>&times;</span>
          <div className="p-4">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full p-2 mb-4 rounded border border-gray-300 bg-white bg-opacity-50 text-black focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-emerald-300 transition-shadow shadow-md"
            />
          </div>
        </div>
      </div>

      <div className={`modal ${showCart ? 'show' : ''}`} id="cartModal">
        <div className="modal-content" ref={cartRef}>
          <span className="close" onClick={() => setShowCart(false)}>&times;</span>
          <div className="p-4">
            {cartItems.length === 0 ? (
              <div>
                <p className="mb-4">Your cart is empty.</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold">Tax est. <span className="float-right">Included</span></p>
                  <p className="font-bold">Total <span className="float-right">0€</span></p>
                  <button className="cart-button mt-4 w-full py-2 rounded">View Cart</button>
                </div>
              </div>
            ) : (
              <div>
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
        </div>
      </div>

      <div className={`modal ${showAccount ? 'show' : ''}`} id="accountModal">
        <div className="modal-content" ref={accountRef}>
          <span className="close" onClick={() => setShowAccount(false)}>&times;</span>
          <div className="p-4">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-2 mb-4 rounded border border-gray-300 bg-white bg-opacity-50 text-black focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-emerald-300 transition-shadow shadow-md"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-2 mb-4 rounded border border-gray-300 bg-white bg-opacity-50 text-black focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-emerald-300 transition-shadow shadow-md"
            />
            <button className="account-button mt-4 w-full py-2 rounded bg-black text-white focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-emerald-300 transition-shadow shadow-md">Sign In</button>
            <p className="mt-4 text-center text-black">Don't have an account? <span className="text-blue-950 cursor-pointer" onClick={handleSignUpClick}>Sign Up</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
