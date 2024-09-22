import './Skills.css';
import React from 'react';

function Skills() {
    const languageSkills = ['JavaScript', 'Python', 'C'];
    const frontendSkills = ['HTML', 'CSS', 'React', 'SASS', 'Bootstrap'];
    const spokenLanguages = ['Arabic', 'Italian', 'English', 'Greek'];

    return (
        <div className="skills-section">
            <div className="skill-list">
                <h1>My Skills</h1>
                <ul className='skills-list'>
                    {languageSkills.map((skill, index) => (
                        <li key={index} className='skill-item'>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="frontEnd-skills">
                <h1>Front-End Skills</h1>
                <ul className='skills-list'>
                    {frontendSkills.map((skill, index) => (
                        <li key={index} className='skill-item'>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>

            <div className='Languages-list'>
                <h1>Languages</h1>
                <ul className='skills-list'>
                    {spokenLanguages.map((skill, index) => (
                        <li key={index} className='skill-item'>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Skills;
