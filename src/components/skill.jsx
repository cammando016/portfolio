import React from "react";

export default function Skill({ skillName, logoImgSrc }){
    return (
        <div id={`skill-${skillName}`} className="skill-display">
            <img 
                src={logoImgSrc}
                alt={`${skillName} Logo`}
                className="skill-logo"
                id={`${skillName}-logo`}
            />
        </div>
    )
}