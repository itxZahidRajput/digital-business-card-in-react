import React from "react"
import myImage from "../my-image-crop.jpg"

export default function Info() {
    const github = () => {
            window.location.href='https://github.com/itxzahidrajput';
        }
        
    const linkedin = () => {
            window.location.href='https://linkedin.com/in/itxzahid';
        }
    
    return (
        <div className="info-container">
        <img src={myImage} />
        <h3>M Zahid Latif</h3>
        <h4>Web Developer</h4>
        <p>@itxzahidrajput</p>
        <div className="btn-container">
        <button onClick={github}>
        <i className="fa-brands fa-github"></i>
        Github
        </button>
        <button onClick={linkedin}>
        <i className="fa-brands fa-linkedin"></i>
        LinkedIn
        </button>
        </div>
        </div>
    )
}