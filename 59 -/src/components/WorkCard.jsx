import React from 'react';
import '../index.css'

import { NavLink } from 'react-router-dom';

const WorkCard = (props) => {
    return ( 
        <div className="project-card">
        <img src={props.imgsrc} alt="" />
        <h2 className="project-title" >{props.title}</h2>
        <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
                <NavLink to={props.view} className="btn">Demo</NavLink>
                <NavLink to={props.view} className="btn">Source</NavLink>
            </div>
        </div>
    </div>
    );
}
 
export default WorkCard;