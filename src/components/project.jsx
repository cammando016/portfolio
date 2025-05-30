import React from "react";
import formatId from "../utils/format-id";

export default function Project ({ project, onClick, projectId }) {
    const handleClick = (e) => {
        onClick(e.target.id);
    }
    
    return (
        <>
            <div id={`project-${formatId(projectId)}`} className="project">
                <div className="project-card">
                    <h4 className="project-name">{project.projectName}</h4>
                    <img
                        className="project-image" 
                        src={project.projectImage}
                        alt="Project Photo"
                    />
                    <div id="project-buttons">
                        <button onClick={handleClick} id={`button-${projectId}`}>Toggle Project Overview</button>
                        {
                            project.projectLink !== "" && <button><a href={project.projectLink} target="blank">Visit Project</a></button>
                        }
                    </div>
                </div>
                
            </div>
        </>
    )
}