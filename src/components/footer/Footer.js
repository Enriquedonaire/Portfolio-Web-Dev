import React from "react";
import "./Footer.css";
import bg1 from "../../media/bg1.mp4";


const Footer = () => {
    return (

        <footer className="footer">
            <div className="cover-container">
                <div className="footer-info">
                    <h1>Enrique Donaire</h1>
                    <p>Barcelona - Spain</p>
                </div>
                <div className="footer-contact">
                    <h3>Contact me</h3>
                    <p>And let's get down to work</p>
                </div>
                <video className="video" src={bg1} autoPlay loop muted />
            </div>
            <div className="footer-sns">
                <div className="design-by"></div>
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/enrique-donaire" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://github.com/Enriquedonaire" target="_blank" rel="noreferrer">
                        <i className="fab fa-github github"></i>
                    </a>
                    <a href="https://codepen.io/Enrique-Andr" target="_blank" rel="noreferrer">
                        <i className="fab fa-codepen codepen"></i>
                    </a>
                    Design By E.Donaire
                </div>
            </div>
        </footer>
        // </div >
    );
};

export default Footer;