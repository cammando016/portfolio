import React from "react";

export default function Skill({ skill }){
    return (
        <div id={`skill-${skill.skillName}`} className="skill-display">
            <img 
                src={skill.skillImage}
                alt={`${skill.skillName} Logo`}
                className="skill-logo"
                id={`${skill.skillName}-logo`}
            />
        </div>
    )
}