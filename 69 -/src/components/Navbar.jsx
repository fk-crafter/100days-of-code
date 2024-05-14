import React from 'react';
import "../index.css"

const Navbar = () => {
    return ( 
        <div className='mt-6 ml-4 mr-4 bg-slate-950 rounded-2xl flex justify-between items-center px-4 py-2'>
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
                    <li><a href="#">Search</a></li>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Wishlist</a></li>
                    <li><a href="#">Shopping cart</a></li>
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;