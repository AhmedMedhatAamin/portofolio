import React, { useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Body from '../Body/Body';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Project/Projects';

function App() {
  const [showBody, setShowBody] = useState(true);
  const [showContact, setShowContact] = useState(true);

  const navigate = useNavigate();

  const toggleContact = () => {
    setShowContact(!showContact);
  };

  const handleContactClick = () => {
    setShowContact(true);
    setShowBody(false);
    navigate('/contact');
  };

  const handleHomeClick = () => {
    setShowContact(false);
    setShowBody(true);
    navigate('/');
  };
   const handleDownloadClick = (e) => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1wAKchjFW6m3KL0z3ZtEgJEKr3qjKT0gX/view?usp=drive_link';
    link.download = 'Resume_Ahmed_Medhat.pdf';
    link.click();
  }

  return (
    <div className="app-container">

      <Home handleContactClick={handleContactClick} handleHomeClick={handleHomeClick} />

      <Routes>

        <Route path="/contact" element={showContact && <Contact />} />
        <Route path="/" element={showBody &&
          <Body handleDownloadClick={handleDownloadClick} showContact={showContact} toggleContact={toggleContact} />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/Project" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
