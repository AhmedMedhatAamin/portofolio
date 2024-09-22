import React from 'react';
import Project from './Project';

const Projects = () => {
    const projectList = [
        {
            title: "Portfolio Website",
            description: "A personal portfolio to showcase my work and skills.",
            link: "https://your-portfolio.com",
            githubLink: "https://github.com/your-username/portfolio",
            image: "portfolio-image-url.jpg"
        },
        {
            title: "E-commerce Store",
            description: "An online store for various products.",
            link: "https://your-store.com",
            githubLink: "https://github.com/your-username/ecommerce",
            image: "ecommerce-image-url.jpg"
        },

        {
            title: "Weather Dashboard",
            description: "A dynamic weather dashboard using React and OpenWeatherMap API. Users can search for cities and see real-time weather updates, along with a 5-day forecast. Fully responsive design using CSS Flexbox and Grid.",
            link: "https://your-weather-app.com",
            githubLink: "https://github.com/your-username/weather-dashboard",
            image: "weather-app-image-url.jpg"
        },

        {
            title: "To-Do List App",
            description: "A to-do list app that allows users to create, edit, delete, and mark tasks as completed. Tasks should persist in local storage so they remain after a page reload..",
            link: "https://your-todolist.com",
            githubLink: "https://github.com/your-username/To-Do List App",
            image: "To-Do List App.jpg"
        },
        {
            title: "Blog Platform with Markdown Support",
            description: "A blog platform where users can create, edit, and publish posts using Markdown. The platform can include rich text formatting and a simple content management system (CMS).",
            link: "https://your-markdownsupport.com",
            githubLink: "https://github.com/your-username/Markdownsupport",
            image: "To-Do List App.jpg"
        }

    ];

    return (
        <div>
            <h1 style={{ padding: '20px' }}>My Projects</h1>
            {projectList.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    githubLink={project.githubLink}
                    image={project.image}
                />
            ))}
        </div>
    );
}

export default Projects;
