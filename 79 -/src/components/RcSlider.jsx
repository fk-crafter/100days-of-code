import Slider from "rc-slider";
import '../index.css';
import 'rc-slider/assets/index.css'
import { useState, useRef } from "react";

const RcSlider = () => {
    const [value, setValue] = useState(20000);
    const cardRef = useRef(null);

    const handleChange = val => setValue(val);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = -y / 10;
        const rotateY = x / 10;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        card.style.transform = `rotateX(0) rotateY(0)`;
    };

    return (
        <div 
            className="card" 
            ref={cardRef} 
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave}
        >
            <div className="card-content">
                <h2>Value</h2>
                <var>
                    <abbr>€</abbr>
                    {value.toLocaleString('en-US')}
                </var>
            </div>
            <Slider step={25} max={100000} value={value} onChange={handleChange} />
        </div>
     );
}
 
export default RcSlider;
