import Slider from "rc-slider";
import '../index.css';
import 'rc-slider/assets/index.css'
import { useState } from "react";

const RcSlider = () => {
    const [value, setValue] = useState(20000)
    const handleChange = val => setValue(val);

    return (
        <div className="card">
            <div>
                <h2>Value</h2>
                <var>
                    <abbr>€</abbr>
                    {value.toLocaleString('en-US')}
                </var>
            </div>
            <Slider step={25} max={100000} value={value} onChange={handleChange}/>
        </div>
     );
}
 
export default RcSlider;