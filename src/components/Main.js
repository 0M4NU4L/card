import React from 'react'
import emailLogo from '../images/Mail.png'
import linkedinLogo from '../images/linkedinlogo.png'

export default function Main() {
    return (
        <div className="main--container">
            <h3 className="main--heading main--content">
                Nirjhar Barma
            </h3>
            <h4 className="main--h4--one main--content">
                Student
            </h4>
            <span className="main--span--two main--content">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank" rel="noopener noreferrer" className="website-link">
                    penguinblog.com
                </a>
            </span>


            <div className="btn--class">
                <a href="mailto:nirjharbarma@gmail.com" className="main--btn btn--email">
                    <img src={emailLogo} className="email" />Email
                </a>
                <a href="https://www.linkedin.com/in/nirjhar-barma-aa268a226/" target="_blank" rel="noopener noreferrer" className="main--btn btn--linkedin">
                    <img src={linkedinLogo} className="linkedin"/>LinkedIn
                </a>
            </div>


            <div className="main--about--interest">
                <h3>About</h3>
                <p>Too lazy to write one rn</p>
                <h3>Interests</h3>
                <p>see up</p>
            </div>

        </div>
    )
}
