import React from "react";

export default function Project ({ projectName, key }) {
    return (
        <div id={`project-${projectName}`} className="project">
            <div className="project-card">
                <h4>{projectName}</h4>
                <img 
                    src="https://cdn1.vectorstock.com/i/1000x1000/84/80/people-silhouette-icon-or-anonymous-person-vector-45238480.jpg"
                    alt='Project Photo'
                    style={{height: '50px', width: 'auto'}}
                />
                <button>Project Overview</button>
                <button>Visit Project</button>
            </div>
        </div>
    )
}