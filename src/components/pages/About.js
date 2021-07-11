import React from 'react';
import Brax from '../../Assets/brax.png'
import '../../Assets/style.css'

export default function About() {
    return (
        <div className="row" id="landing">
            <div className="col-lg-6 gx-4">
                <div className="container" id="about">
                    <h2>About</h2>
                    <p>
                        Hello, my name is Braxton. I am a developer from Atlanta, GA. I currently have experience working in a variety of technologies and frameworks in the MERN Stack. I am particularly fond of front-end development given my previous work in graphic design, but also enjoy the challenge of server-side development.
                    </p>
                </div>
            </div>
            <div className="col-lg-6" id="brax">
                <figure>
                    <img src={Brax} alt="Brax Bodenhamer in sunglasses and tracksuit"></img>
                </figure>
            </div>
        </div>
    )
}
