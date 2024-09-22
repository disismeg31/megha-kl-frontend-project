import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import './Work.css';
function Works() {
  return (
    <>
    <div className="container">
    <div className='works-part' id="works">
        <div className="sectiontop">
          <div className="image-sample">
          <span className="new-window">View Project<span style={{marginLeft:"10px"}}><MdArrowOutward size={20} /></span></span>
          </div>
          <div className="techstack">
            <span className='badge'>Development</span>
            <span className='badge'>UI/UX</span>
            <span className='badge'>Illustration</span>
          </div>
          <span className='work-name'>Roboto Landing Page</span>
        </div>
        <div className="section1">
        <div className="image-sample">
        <span className="new-window">View Project<span style={{marginLeft:"10px"}}><MdArrowOutward size={20} /></span></span>
        </div>
          <div className="techstack">
            <span className='badge'>Development</span>
            <span className='badge'>UI/UX</span>
            <span className='badge'>Illustration</span>
          </div>
          <span className='work-name'>Grotech Website</span>
        </div>
    </div>
    <div className="works-part2">

      <div className="head">
        <p>• Featured Works</p>
        <p className='head-title'>Take a look at our projects</p>
      </div>

      <div className="section1">
        <div className="image-sample">
        <span className="new-window">View Project<span style={{marginLeft:"10px"}}><MdArrowOutward size={20} /></span></span>
        {/* <span className="new-window">View Project</span> */}
        </div>
          <div className="techstack">
            <span className='badge'>UI/UX</span>
            <span className='badge'>Illustration</span>
          </div>
          <span className='work-name'>Poppin App Design</span>
        </div>

        <div className="section1">
        <div className="image-sample">
        <span className="new-window">View Project<span style={{marginLeft:"10px"}}><MdArrowOutward size={20} /></span></span>
        </div>
          <div className="techstack">
            <span className='badge'>Branding</span>
            <span className='badge'>UI/UX</span>
          </div>
          <span className='work-name'>Helvatica Branding</span>
        </div>
    </div>
    </div>
    
    </>
    
  )
}

export default Works