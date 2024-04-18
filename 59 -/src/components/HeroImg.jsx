import '../index.css';
import IntroImg from '../assets/img1.jpg'
import { Link } from 'react-router-dom';

const HeroImg = () => {
    return ( 
        <div className="hero">
            <div className="mask">
                ,<img src={IntroImg} alt="IntroImg" className="into-img" />
            </div>
            <div className="content">
                <p>Hi, i'm a web developer.</p>
                <h1>React.</h1>
                <div>
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
     );
}
 
export default HeroImg;