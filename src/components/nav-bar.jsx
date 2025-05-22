import React from "react";

export default function Navbar () {
    return (
        <div id="navbar">
            <h4 id="navbar-heading">
                <span className="page-heading-accent">{`<>`}</span> Developer Portfolio <span className="page-heading-accent">{`</>`}</span>
            </h4>
            <nav id="navbar-links">
                <a>Home</a>
                <a>About</a>
                <a>Education</a>
                <a>Projects</a>
                <a>Skills</a>
                <a>Contact</a>
            </nav>
        </div>
    )
}