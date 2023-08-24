import React from 'react';
import './Footer.css'; // Make sure to create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left">
      <div className='logo'>
        <img src='https://geeksinvention.com/assets/v2/content/geeks-logo-white.svg' alt='logo'/>
      </div>
        <div className="address">
          447 Broadway, 2nd Floor Suite #772,<br />
          New York 10013, United States<br />
          +1-347-535-0004
        </div>
      </div>
      <div className="middle">
        <div className="menu">
          <a href="#">Works</a>
          <a href="#">Technologies</a>
          <a href="#">Services</a>
          <a href="#">Company</a>
          <a href="#">Contacts</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <div className="right">
        <button className="pill-button">Stay tuned for our updates</button>
      </div>
    </footer>
  );
}

export default Footer;
