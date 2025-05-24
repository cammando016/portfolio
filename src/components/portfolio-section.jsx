import React from "react";

export default function PortfolioSection ({ sectionName, sectionContent, children }) {
    return (
        <div id={`section-${sectionName}`} className="portfolio-section">
            <h3 className="section-heading">{sectionName}</h3>

            <div id={`content-${sectionName}`} className="portfolio-section-content">
                <p>{sectionContent}</p>
            </div>

            {
                children && (
                    <div className="portfolio-children">
                        {children}
                    </div>
                )
            }
        </div>
    )
}