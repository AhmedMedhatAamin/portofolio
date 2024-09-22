import React from "react";
import PropTypes from 'prop-types';
import './Project.css';

const Project = ({ title, description, link, githubLink, image }) => (
    <div className="project-container">
        <div className="project">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="links">
                <a href={link} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
    </div>
);

Project.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    image: PropTypes.string,
};

Project.defaultProps = {
    image: "default-image.jpg",
    title: "Untitled Project",
};

export default Project;
