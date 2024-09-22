 import { useState } from 'react';
 import './Navbar.css';
 import {Link} from 'react-scroll';
 import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {

   const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
     <header className="header">
        <a  className="logo" href="#">Wefo</a>
        <nav className={`navbar ${isMenuOpen?'active':''}`}>
            <Link className="link" to="home" smooth={true} offset={50} duration={500} onClick={toggleMenu} >Home</Link>
            <Link className="link" to="about" smooth={true} offset={50} duration={500} onClick={toggleMenu}>About</Link>
            <Link className="link" to="works" smooth={true} offset={50} duration={500} onClick={toggleMenu}>Works</Link>
            <Link className="link" to="services" smooth={true} offset={50} duration={500} onClick={toggleMenu}>Services</Link>
            <Link className="link" to="leader" smooth={true} offset={50} duration={500} onClick={toggleMenu}>Leader</Link>
            <Link className="link" to="testimonials" smooth={true} offset={50} duration={500} onClick={toggleMenu}>Testimonials</Link>
            <Link className="link" to="contact" smooth={true} offset={50} duration={500} onClick={toggleMenu}>Contact</Link>
        </nav>
        <button className='start-project-btn'>Start a project</button>
        <div className="hamburger" onClick={toggleMenu}>
        <GiHamburgerMenu size={23} />
      </div>
     </header>
  )
}

export default Navbar