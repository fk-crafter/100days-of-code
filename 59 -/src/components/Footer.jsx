import React from "react";
import '../index.css';
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
                        <div>
                            <p>123 Adress</p>
                            <p>France</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    0101010101</h4>
                    
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    info@gmail.com</h4>
                    
                    </div>
                </div>
                <div className="right">
                    <h4>Lorem, ipsum dolor.</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi repudiandae nihil, pariatur incidunt odit ullam possimus aspernatur libero sunt assumenda?</p>
                    <div className="social">
                    <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}} />
                    <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}} />
                    <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;