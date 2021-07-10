import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className= "navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="dropdown show">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Menu
            </a>
          
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
                <li><NavLink 
                    exact
                    to="/"
                    className="dropdown-item">About</NavLink></li>
                <li><NavLink 
                    exact
                    to="/work"
                    className="dropdown-item">Work</NavLink></li>
                <li><NavLink 
                    exact
                    to="/contact"
                    className="dropdown-item">Contact</NavLink></li>
            </ul>
        </div>
        <div className="navbar-brand">
            <h1>Braxton Bodenhamer</h1>
        </div>
    </nav>
    )
}