import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {

    const [email, setEmail] = useState('');
    const [usersName, setUsersName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        let target = e.target;
        let inputType = target.name;
        let inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setUsersName(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue);
        };
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email) || !usersName) {
            setErrorMessage('Please enter a valid email and your name');
        } else if (!message) {
            setErrorMessage('Please enter a message')
        } else {
            alert("Contact form function not currently working")
        }

        setUsersName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="formContainer col-xs-12 col-lg-3">
            <form className="contactForm">
                <h2>Contact</h2>
                <input
                    value={usersName}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Full Name"
                />
                <input 
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                />
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Contact form does not currently work. Please use email in the meantime!"
                />
                <button onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
};

export default Contact;