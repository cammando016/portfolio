import React, { useState } from "react";
import { portfolioContent } from "../data/portfolio-content";
import formatId from "../utils/format-id";

export default function Navbar () {
    const [showMenu, setShowMenu] = useState(false);

    function updateShowMenu () {
        setShowMenu(!showMenu);
    }

    return (
        <div id="navbar">
            <div id="mobile-navbar">
                <img src="/menu-icon.png" id="mobile-menu-icon" alt="Mobile Menu Icon" onClick={updateShowMenu}/>
                <h2 id="navbar-heading">
                    <span className="page-heading-accent">{`<>`}</span> Developer Portfolio <span className="page-heading-accent">{`</>`}</span>
                </h2>
            </div>
            
            <nav id="navbar-links" className={showMenu ? "show-menu" : "hide-menu"}>
                {
                    portfolioContent.map(section => {
                        return <a className="navbar-link" id={`${formatId(section.sectionName)}-link`} href={`#section-${formatId(section.sectionName)}`} key={section.sectionId} onClick={updateShowMenu}>{section.sectionName}</a>
                    })
                }
            </nav>
        </div>
    )
}