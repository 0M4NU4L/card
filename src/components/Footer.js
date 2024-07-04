/*
import React from 'react'
import twitterLogo from '../images/twitter.jpg'
import facebookLogo from '../images/facebook.jpg'
import instagramLogo from '../images/instagram.jpg'
import githubLogo from '../images/github.jpg'

export default function Footer() {
    return (
        <div className="footer--container">
            <div className='footer--items'>
                <img src={twitterLogo} alt='' className='footer--image' />
                <img src={facebookLogo} alt='' className='footer--image' />
                <img src={instagramLogo} alt='' className='footer--image' />
                <img src={githubLogo} alt='' className='footer--image' />
            </div>
        </div>
    )
}
*/

import React from 'react';
import twitterLogo from '../images/twitter.jpg';
import facebookLogo from '../images/facebook.jpg';
import instagramLogo from '../images/instagram.jpg';
import githubLogo from '../images/github.jpg';

export default function Footer() {
    return (
        <div className="footer--container">
            <div className='footer--items'>
                <a href="https://x.com/0M4NU4L" target="_blank" rel="noopener noreferrer">
                    <img src={twitterLogo} alt='Twitter' className='footer--image' />
                </a>
                <a href=" " target="_blank" rel="noopener noreferrer">
                    <img src={facebookLogo} alt='Facebook' className='footer--image' />
                </a>
                <a href="https://www.instagram.com/penguininsidethehoodie" target="_blank" rel="noopener noreferrer">
                    <img src={instagramLogo} alt='Instagram' className='footer--image' />
                </a>
                <a href="https://github.com/0M4NU4L" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt='GitHub' className='footer--image' />
                </a>
            </div>
        </div>
    );
}
