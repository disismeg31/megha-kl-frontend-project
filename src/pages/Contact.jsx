import React ,{useState}from "react";
import "./Contact.css";
import { MdArrowOutward } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";

function Contact() {

  const [formData,setFormData]= useState({
    name:"",
    email:"",
    message:"",
  })

  const handleInput=(e)=>{
    const {name,value}=e.target;
    setFormData((f)=>({...f,[name]:value}));
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert(`Hi ${formData.name} Your Message was send successfully✅`);
    console.log(formData);
    setFormData({
      name:"",
      email:"",
      message:"",
    });
  }
  return (
    <div className="contact-part" id="contact">
      <div className="contact-section-1">
        <div className="contact-block">
          {/* <p className='our-testimonial'>• Testimonials</p> */}
          <p className="contact-heading">
            Feel free to conect <br /> with us !
          </p>
          <div className="contacts-next">
            <span className="contacts-explore-arrow">
              <FaXTwitter size={20} />
            </span>
            <span className="contacts-explore-arrow">
              <FaInstagram size={20} />
            </span>
            <span className="contacts-explore-arrow">
              <FaDribbble size={20} />
            </span>
            <span className="contacts-explore-arrow">
              <FaBehance size={20} />
            </span>
          </div>
          <div className="contacts-phone-email">
            <span className="con-dets">< MdLocalPhone size={20} style={{marginRight:"10px"}} />0972 663 633</span>
            <span className="con-dets"><IoMailOutline size={20} style={{marginRight:"10px"}} />hello@wefo.com</span>
          </div>
        </div>
        <div className="contact-block-1">
            <form className="contact-block-2" onSubmit={handleSubmit} >
          <label className="label" htmlFor="name">
            {" "}
            Name <span style={{ color: "red" }}>*</span>
            <br />
            <input 
            placeholder="Your name" 
            className="input-style" 
            name="name" 
            value={formData.name} 
            id="name" 
            type="text" 
            onChange={handleInput}/>
          </label>
          <label className="label" htmlFor="email">
            {" "}
            Email <span style={{ color: "red" }}>*</span>
            <br />
            <input
              className="input-style"
              name="email"
              id="email"
              type="email"
              value={formData.email}
              placeholder="Your email address"
              onChange={handleInput}
            />
          </label>
          <label className="label" htmlFor="message">
            {" "}
            Message
            <br />
            <textarea
              cols={4}
              rows={9}
              value={formData.message}
              className="input-style"
              name="message"
              id="message"
              placeholder="Write your message here..."
              onChange={handleInput}
            ></textarea>
          </label>

          <button className="contact-send">
              Send <MdArrowOutward size={20} />
            </button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
