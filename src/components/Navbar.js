import React from 'react';

export default function Navbar() {
    return (
        <nav className= "navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="dropdown show">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Menu
            </a>
          
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
                <li><a className="dropdown-item" href="/">About</a></li>
                <li><a className="dropdown-item" href="work">Work</a></li>
                <li><a className="dropdown-item" href="contact">Contact</a></li>  
            </ul>
        </div>
        <div className="navbar-brand">
            <h1>Braxton Bodenhamer</h1>
        </div>
    </nav>
    )
}