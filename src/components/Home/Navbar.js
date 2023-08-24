import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className='logo'>
        <img src='https://geeksinvention.com/assets/v2/content/geeks-logo-white.svg' alt='logo'/>
      </div>
      <div className={`nav__toggle ${isMenuOpen ? 'active' : ''}`} onClick={handleMenuToggle}>
        <FaBars />
      </div>
      <ul className={`nav__item ${isMenuOpen ? 'active' : ''}`}>
        <li className='nav__menu'>
          <a className='nav__link'>HOME</a>
          <hr className="nav__divider" />
        </li>
        <li className='nav__menu'>
          <a className='nav__link'>WORKS</a>
        </li>
        <li className='nav__menu'>
          <a className='nav__link'>TECHNOLOGIES</a>
        </li>
        <li className='nav__menu'>
          <a className='nav__link'>SERVICES</a>
        </li>
        <li className='nav__menu'>
          <a className='nav__link'>COMPANY</a>
        </li>
        <li className='nav__menu'>
          <a className='nav__link'>CONTACTS</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
