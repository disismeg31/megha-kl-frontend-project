import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import banner from '../assets/banner.svg' ;
import './About.css'

function About() {
  return (

    <>
    <div className='about-section' id="about">
        <div className="who-are">
            <p className='about-p'>• Who are we?</p>
            <div className='object'></div>
        </div>
        
        <div className="about-description">
            <p className='description-para'> We create mind-blowing visuals, brands, websites and products <span style={{ color:"grey", display:"inline"}}>that help startups and innovative companies gain more exposure</span> </p>
            <button className='learn-more-btn'>Learn More  <span><MdArrowOutward size={16} /></span> </button>
        </div>
 
         </div>

        <div className='image-banner'>
            <img src={banner} alt="banner" />
        </div>
    
    </>
  )
}

export default About