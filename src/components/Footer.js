import React from 'react';
import Github from "../Assets/GitHub_logo.png";
import Email from "../Assets/email.png";
import Stackoverflow from "../Assets/stackoverflow.png";
import LinkedIn from "../Assets/linkedin.png"

export default function Footer() {
    return (
        <footer className="bg-dark text-center text-lg-start footer">
            <a href="mailto: braxb92@gmail.com" className="email">
                <img className="emailIcon" src={Email} alt="email icon"></img>
            </a>
            <a href="https://github.com/BraxB" className="github">
                <img className="githubIcon" src={Github} alt="github logo"></img>
            </a>
            <a href="https://stackoverflow.com/users/14968087/braxb" className="stackoverflow">
                <img className="stackoverflowIcon" src={Stackoverflow} alt="stack overflow logo"></img>
            </a>
            <a href="https://www.linkedin.com/in/braxtonbodenhamer/" className="LinkedIn">
                <img className="LinkedinIcon" src={LinkedIn} alt="linkedin logo"></img>
            </a>
        </footer>
    )
}