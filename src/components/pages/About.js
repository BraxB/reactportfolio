import React from 'react';
import Brax from '../../Assets/brax.png'

export default function About() {
    return (
        <div className="row" id="landing">
            <div className="col-lg-4">
                <div className="container" id="about">
                    <h2>About</h2>
                    <p>
                    I am a Full-stack web developer looking to leverage extensive experience in digital marketing and graphic design to build efficient and attractive applications. I am currently enrolled in Georgia Tech’s full-stack coding bootcamp working on earning my web development certificate. During this time I have been sharpening my skills with NodeJS, CSS, MySQL, and MongoDB. I have worked in JavaScript extensively and in Python to a lesser degree. <br/> <br/> My approach in my projects is to develop applications that are efficient, SEO optimized, mobile friendly, and scalable. I place a heavy emphasis on user experience in my work. Most recently I have had the opportunity to build an application using NodeJS and MySQL that allows for teams to collaborate on t-shirt designs. I am looking forward to continuing to develop my skills and use them to build technologies that just might make the internet and the world a better place.
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
