// about.js
import { Link } from 'react-router-dom';
import React from 'react';

const About = () => {
    return (
        <div className="container">
            <h1>About</h1>
            <div className='img-container'> 
                <img
                    src='https://i.pinimg.com/564x/80/48/55/804855bd241e1459e64d80ad06836240.jpg'
                    width='200'
                    height='200'
                />
            </div>
            <p>
                This Affine Cipher and Caesar Cipher Calculator was developed by Hafiz Hamdani as a remedial project for the mid-semester examination in the Cryptography course.
            </p>
            <Link to="/">
                <h4 className='link'>Back to Calculator</h4>
            </Link>
        </div>
    );
};

export default About;
