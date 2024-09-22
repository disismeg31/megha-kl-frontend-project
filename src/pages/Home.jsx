import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import backgroundImage from '../assets/hero-sec-image.svg';
import './Home.css';
function Home() {
  return (
    <div className='home-section' id="home">
        <div className="background-image">
        <img src={backgroundImage}alt="background image" />
        </div>
        <div className="heading">
            <h1 className='heading-h1'>
                We create award <br /> winning website
            </h1>
            <div className='description-div'>
            <p>Based in San Francisco, we’re a digital products design& development studio that passionate with the creation high applicability of digital experiences</p>
            
            <button className='explore-btn'>Explore <span><MdArrowOutward size={16} /></span> </button>
            </div>
        </div>
    </div>
  )
}

export default Home