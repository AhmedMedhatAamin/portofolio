import './Contact.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function ContactUs() {
  return (
    <div className="contact-us">
      <div className='contact-methods'>
        <h1>Contact Us</h1>
        <div className='methods'>
          <div className='contact-item email'>
            <h3>Email</h3>
            <a href="ahmedmedhat.ahmed011@gmail.com">ahmedmedhat.ahmed011@gmail.com</a>
          </div>
          <div className='contact-item phone'>
            <h3>Phone</h3>
            <a href="+30 690 670 7227">+30 690 670 7227</a>
          </div>
          <div className='contact-item address'>
            <h3>Address</h3>
            <p>Cairo, Egypt</p>
          </div>
        </div>
        <div className='social-media'>
          <h3>Social Media</h3>
          <div className='social-media-links'>
            <a href="https://www.facebook.com/profile.php?id=100016799883255" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} className='social-icon' />
            </a>
            <a href="https://www.twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className='social-icon' />
            </a>
            <a href="https://www.instagram.com/your_instagram_handle" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className='social-icon' />
            </a>
            <a href="www.linkedin.com/in/ahmed-medhat-6057a0195" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} className='social-icon' />
            </a>
          </div>
        </div>
          </div>
          <div className='contact-form'>

          </div>
    </div>
  );
}

export default ContactUs;
