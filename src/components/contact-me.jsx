import React from "react";
import formatId from "../utils/format-id";

export default function ContactMe() {
    return (
        <div id="contact-me">
            <h1><em>Hi, I'm Cam</em></h1>
            <img 
                src="/profile-picture.jpeg"
                alt="photo of me"
                id="personal-photo"
            />
            <div id="contact-follow-links">
                <a href="https://github.com/cammando016" target="blank"><img alt="Github Logo" className="social-link" src="/github-logo.png" /></a>
                <a href="https://www.linkedin.com/in/cameron-anderson-6b3078209/" target="blank"><img alt="LinkedIn Logo" className="social-link" src="/linkedin-logo.png" /></a>
            </div>
            <div id="contact-download-links">
                <a href="/c-anderson-resume-2025.pdf" download="C-Anderson-Resume"><button className="download-file" id="resume-download">Download Resume</button></a>
                <a href="/c-anderson-cover-2025.pdf" download="C-Anderson-Cover-Letter"><button className="download-file" id="cover-letter-download">Download Cover Letter</button></a>
            </div>
        </div>
    )
}