import React from "react";
import formatId from "../utils/format-id";

export default function Project ({ project, onClick, projectId }) {
    const handleClick = (e) => {
        onClick(e.target.id);
    }
    
    return (
        <>
            <div id={`project-${formatId(project.projectName)}`} className="project">
                <div className="project-card">
                    <h4>{project.projectName}</h4>
                    <img 
                        src="https://cdn1.vectorstock.com/i/1000x1000/84/80/people-silhouette-icon-or-anonymous-person-vector-45238480.jpg"
                        alt='Project Photo'
                        style={{height: '50px', width: 'auto'}}
                    />
                    <div id="project-buttons">
                        <button onClick={handleClick} id={`button-${projectId}`}>Project Overview</button>
                        <button><a href={project.projectLink} target="blank">Visit Project</a></button>
                    </div>
                </div>
                
            </div>
        </>
    )
}