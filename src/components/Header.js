import React from 'react'
import profileLogo from '../images/profile.jpg'

export default function Header() {
    return (
        <div className="header--container">
                <img src={profileLogo} alt='' width='317px' height='317px' />
        </div>
    )
}