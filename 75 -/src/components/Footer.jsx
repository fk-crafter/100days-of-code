import React from "react";
import {
    faInstagram,
    faFacebookF,
    faPinterestP,
    faXTwitter,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../index.css";

const Footer = () => {
    return (
        <footer className="bg-white py-8 px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h2 className="font-semibold mb-4">Customer Service</h2>
                    <ul>
                        <li className="mb-2"><a href="#" className="footer-link">Contact Us</a></li>
                        <li className="mb-2"><a href="#" className="footer-link">Call Us Now 0101 010 101</a></li>
                        <li className="mb-2"><a href="#" className="footer-link">Product Care</a></li>
                        <li className="mb-2"><a href="#" className="footer-link">Make an Appointment</a></li>
                        <li className="mb-2"><a href="#" className="footer-link">FAQ</a></li>
                        <li className="mb-2"><a href="#" className="footer-link">Shipping and Returns</a></li>
                        <li className="mb-2"><a href="#" className="footer-link">Catalogs</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-semibold mb-4">Our Company</h2>
                    <ul>
                        <li className="mb-2"><a href="#" className="footer-link">The World of Tiffany</a></li>
                        <li className="mb-2"><a href="#" className="footer-link">Sustainability</a></li>
                        <li className="mb-2"><a href="#" className="footer-link">Gender Pay Equality Index</a></li>
                        <li className="mb-2"><a href="#" className="footer-link">Website Policies</a></li>
                        <li className="mb-2"><a href="#" className="footer-link">Site Map</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-semibold mb-4">Related Tiffany Sites</h2>
                    <ul>
                        <li className="mb-2"><a href="#" className="footer-link">Tiffany for the Press</a></li>
                        <li className="mb-2"><a href="#" className="footer-link">The Tiffany & Co. Foundation</a></li>
                        <li className="mb-2"><a href="#" className="footer-link">Careers at Tiffany</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-semibold mb-4">Latest Tiffany News</h2>
                    <p className="mb-4">Be the first to know about our latest creations, special events, store openings, and more.</p>
                    <input type="email" placeholder="Email Address" className="border-b mb-4 w-full py-2"/>
                    <button className=" subscribe-btn bg-black text-white py-2 px-4 rounded">Subscribe</button>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="footer-social-link"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#" className="footer-social-link"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#" className="footer-social-link"><FontAwesomeIcon icon={faPinterestP} /></a>
                        <a href="#" className="footer-social-link"><FontAwesomeIcon icon={faXTwitter} /></a>
                        <a href="#" className="footer-social-link"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <span>Choose Location: France &nbsp; ⬇️</span>
            </div>
            <div className="text-center mt-4">
                <span>© Fowad 2024</span>
            </div>
        </footer>
    );
}

export default Footer;
