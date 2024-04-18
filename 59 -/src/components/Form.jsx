import React from 'react';
import '../index.css'

const Form = () => {
    return ( 
        <div className="form">
            <form>

            <label>Your name</label>
            <input type="text" />

            <label>Email</label>
            <input type="email" />

            <label>Subject</label>
            <input type="text" />

            <label>Message</label>
            <textarea placeholder="Type your text here" rows="6"></textarea>

            <button className="btn">Submit</button>

            </form>
        </div>
    );
}
 
export default Form;