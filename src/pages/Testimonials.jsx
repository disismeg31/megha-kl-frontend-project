import React from 'react'
import './Testimonial.css';
import shadowimg from '../assets/shadow-banner.svg';
import avatar from '../assets/avatar.png';
import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
function Testimonials() {
  return (
    <div className='testimonial-part' id="testimonials">
      <div className="testimonial-section-1">
        <div className="testimonial-block">
        <p className='our-testimonial'>• Testimonials</p>
        </div>
        <div className="testimonial-block">
        <p className='testimonial-heading'>A studio filled with passion, professionalism, and boundless creativity. They exceeded my expectations with their excellent services, high-quality products, and affordable prices. I&#8217;m extremely satisfied!</p>
        <div className="senior-details">
        <div className="proimg">
        <img src={avatar} alt="avatar" />
        </div>
        <div className="name-and-position">
          <p className='senior-name'>Kathryn Murphy</p>
          <p className='senior-position-name'>Senior Marketing, Spotify</p>
        </div>
      </div>
         <div className="testimonials-next">
          <span className='testimonial-explore-arrow' ><MdArrowBack size={20} /></span>
          <span className='testimonial-explore-arrow'><MdArrowForward  size={20} /></span>
         </div>
        </div>
      </div>
      
    </div>
  )
}

export default Testimonials