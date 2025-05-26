import React from "react";
import { projectContent } from "../data/portfolio-content";
import formatId from "../utils/format-id";

export default function PortfolioSection ({ sectionName, sectionContent, activeProject, children }) {
    return (
        <div id={`section-${formatId(sectionName)}`} className="portfolio-section">
            <h3 className="section-heading">{sectionName}</h3>

            <div id={`content-${formatId(sectionName)}`} className="portfolio-section-content">
                <p>{sectionContent}</p>
            </div>

            {
                children && (
                    <div className="portfolio-children">
                        {children}
                    </div>
                )
            }

            {
                sectionName === 'Projects' && (
                    <div id='project-overviews'>
                        {
                            projectContent.filter(project => activeProject === project.projectId).map(project => {
                                return (<p key={project.projectId} id={`project-${formatId(project.projectName)}-content`} className="project-content">{project.projectOverview}</p>)
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}