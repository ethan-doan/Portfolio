import React from "react";
import "../styles/Projects.css";

function Projects() {
    return (
        <div className="projectsContainer">
            <div className="projectsTitle">Bluebox Forum | In Production</div>
                <ul>
                    <li>Created a forum for Bluebox recipients to troubleshoot issues and contribute to the Bluebox community using MongoDB, Express, React, and Node</li>
                    <li>Identified user needs and interactions and developed highly responsive user interface components with React and React Bootstrap</li>
                    <li>Designed robust REST APIs using Express and Node enabling seamless data handling, real-time data updating, and efficient server-side operations with MongoDB</li>
                </ul>
            <hr></hr>
            <div className="projectsTitle">Personal Portfolio Website | ethandoan.com</div>
            <ul>
                <li>Developed a responsive website displaying my work experience, career achievements, hobbies, and personality using HTML, CSS, JavaScript, and Bootstrap</li>
                <li>Implemented search engine optimization methodologies through meta tags, keyword-rich content, and alt tags for images, leading to improved site visibility and ranking on search engines</li>
            </ul>
        </div>
    );
}

export default Projects;