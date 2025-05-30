import React from "react";
import { portfolioContent } from "../data/portfolio-content";
import formatId from "../utils/format-id";

export default function Navbar () {
    return (
        <div id="navbar">
            <h2 id="navbar-heading">
                <span className="page-heading-accent">{`<>`}</span> Developer Portfolio <span className="page-heading-accent">{`</>`}</span>
            </h2>
            <nav id="navbar-links">
                {
                    portfolioContent.map(section => {
                        return <a className="navbar-link" id={`${formatId(section.sectionName)}-link`} href={`#section-${formatId(section.sectionName)}`} key={section.sectionId}>{section.sectionName}</a>
                    })
                }
            </nav>
        </div>
    )
}