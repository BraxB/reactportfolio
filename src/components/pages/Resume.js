import React from 'react';
import Resume from '../../Assets/Resume.pdf'

export default function Skills() {
    return (
        <div className="skills_resume">
            <div className="skillscontainer col-lg-4 col-s-12">
                <h3><a href={Resume} download>Download Resume</a></h3>
                <div className="skills">
                    <h3>Skills</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>JQuery</li>
                        <li>NodeJS</li>
                        <li>Express</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>Apollo GraphQL</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}