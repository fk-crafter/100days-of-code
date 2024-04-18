import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.png"

const AboutContent = () => {
    return ( 
        <div className="about">
            <div className="left">
                <h1>Who am i ?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem cum voluptas fugiat magni.</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>

            <div className="right">
                <div className="img-container">

                    <div className="img-stack top">
                        <img src={React1} alt="" className="img"/>
                    </div>

                    <div className="img-stack bottom">
                        <img src={React2} alt="" className="img"/>
                    </div>

                </div>
            </div>
        </div>
    );
}
 
export default AboutContent;