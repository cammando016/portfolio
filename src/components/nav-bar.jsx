import React from "react";
import { portfolioContent } from "../data/portfolio-content";
import formatId from "../utils/format-id";

export default function Navbar () {
    return (
        <div id="navbar">
            <h4 id="navbar-heading">
                <span className="page-heading-accent">{`<>`}</span> Developer Portfolio <span className="page-heading-accent">{`</>`}</span>
            </h4>
            <nav id="navbar-links">
                {
                    portfolioContent.map(section => {
                        return <a href={`#section-${formatId(section.sectionName)}`} key={section.sectionId}>{section.sectionName}</a>
                    })
                }
            </nav>
        </div>
    )
}