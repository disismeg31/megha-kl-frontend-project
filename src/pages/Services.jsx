import React from 'react'
import './Services.css';
import { MdArrowOutward } from "react-icons/md";
function Services() {
  return (
    <>
    <div className='services-part' id="services">
      <div className="services-container">
      <div className="service-section-1">
        <div className="service-block">
        <p className='our-services'>• Our Services</p>
        </div>
        <div className="service-block">
        <p className='service-heading'>We are a close-knit team of experts dedicated to crafting memorable and <span style={{ color:"grey", display:"inline"}}> emotionally engaging websites, digital experiences, and native apps. </span></p>
        </div>
      </div>
      <div className="services">
          <div className="card-container">
            <div className="serv-name-nd-explore">
            <p className='service-name'> BRAND <br /> IDENTITY </p> <span className='explore-arrow'> <MdArrowOutward size={20} /></span> 
            </div>
            <p className="service-description">We provide digital solutions as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company’s values </p>
          </div>
          <div className="card-container">
            <div className="serv-name-nd-explore">
            <p className='service-name'> UI/UX <br /> DESIGN </p> <span className='explore-arrow'> <MdArrowOutward size={20} /></span> 
            </div>
            <p className="service-description">We provide digital solutions as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company’s values </p>
          </div>
          <div className="card-container">
            <div className="serv-name-nd-explore">
            <p className='service-name'> WEBFLOW <br /> DEVELOPER </p> <span className='explore-arrow'> <MdArrowOutward size={20} /></span> 
            </div>
            <p className="service-description">We provide digital solutions as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company’s values </p>
          </div>
      </div>
      </div>
      
    </div>
    </>
    
  )
}

export default Services