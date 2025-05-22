import React from "react";

export default function PortfolioSection ({ sectionName, sectionContent, children }) {
    return (
        <div id={`section-${sectionName}`} className="portfolio-section">
            <h4>{sectionName}</h4>

            <div id={`content-${sectionName}`} className="portfolio-section-content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum laoreet bibendum. 
                    Nulla molestie quis eros vitae bibendum. Aliquam nisl nisi, interdum sit amet risus eget, semper semper ante. 
                    Sed bibendum nunc at ipsum fermentum, id congue felis condimentum. Vestibulum laoreet imperdiet augue, non bibendum neque. 
                    Aliquam eget sem at erat facilisis scelerisque fermentum quis arcu. Nunc aliquam fringilla faucibus. 
                    Nam pellentesque facilisis lacus, sed faucibus felis tempor non.
                </p>
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