import React from "react";
import formatId from "../utils/format-id";

export default function Project ({ project, onClick }) {
    const handleClick = (e) => {
        onClick(e.target.id);
    }
    
    return (
        <>
            <div id={`project-${formatId(project.projectId)}`} className="project">
                <div className="project-card">
                    <h4 className="project-name"><img alt="text" className="icon-img" src={project.projectLangImg}/>{project.projectName}</h4>
                    <img
                        className="project-image" 
                        src={project.projectImage}
                        alt="Project Photo"
                    />
                    <div id="project-buttons">
                        <button onClick={handleClick} id={`button-${project.projectId}`}>Toggle Project Overview</button>
                        {
                            project.projectLink !== "" && <button><a href={project.projectLink} target="blank">Visit Project</a></button>
                        }
                    </div>
                </div>
                
            </div>
        </>
    )
}