import React from 'react';
import './Body.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLanguage, faProjectDiagram, faFileDownload, faEnvelope, faBlog } from '@fortawesome/free-solid-svg-icons';

function Body({handleDownloadClick}) {

  return (
    <div className='app-container'>
      <div className='Body-main'>
        <h1>Ahmed Medhat</h1>
        <p>I'm a software engineer with a passion for technology and design.</p>

        <section className='Body-section'>
          <div className='Body-skills'>
            <FontAwesomeIcon icon={faCode} className='icon' />
            <h2>Skills</h2>
            <NavLink to = 'Skills'>
              <button className='btn btn-primary'>CLICK HERE</button>
              </NavLink>
          </div>

          <div className='Body-languages'>
            <FontAwesomeIcon icon={faLanguage} className='icon' />
            <h2>Languages</h2>
            <button className='btn btn-primary'>CLICK HERE</button>
          </div>

          <div className='Body-projects'>

            <FontAwesomeIcon icon={faProjectDiagram} className='icon' />
            <NavLink to ="project">
            <h2>Projects</h2>
              <button className='btn btn-primary'>CLICK HERE</button>
            </NavLink>
          </div>

          <div className='Body-cv'>
            <FontAwesomeIcon icon={faFileDownload} className='icon' />
            <h2>CV</h2>
            <button className='btn btn-primary' onClick={handleDownloadClick}>CLICK HERE TO DOWNLOAD IT</button>

          </div>

          <div className='Body-contact'>
            <FontAwesomeIcon icon={faEnvelope} className='icon' />
            <h2>Contact</h2>
            <NavLink to = "contact">
            <button className='btn btn-primary'
              >CLICK HERE</button>
            </NavLink>
          </div>

          <div className='Body-blog'>
            <FontAwesomeIcon icon={faBlog} className='icon' />
            <h2>About</h2>
            <NavLink to = 'about'>
              <button className='btn btn-primary'>CLICK HERE</button>
            </NavLink>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Body;
