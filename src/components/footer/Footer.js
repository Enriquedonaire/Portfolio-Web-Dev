import React from "react";
import "./Footer.css";
import bg1 from "../../media/bg1.mp4";


const Footer = () => {
    return (

        <footer className="footer">
            <div className="cover-container">
                <div className="footer-info">
                    <h1>Enrique Donaire</h1>
                    <p className="footer-info-P">Barcelona - Spain</p>
                </div>
                <div className="footer-contact">
                    <h3>Contact me</h3>
                    <p>And let's bring ideas to life</p>
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
                    <a href={`${process.env.PUBLIC_URL}/Enrique-A-Donaire-Full-Stack-Web-Developer-2024.pdf`} download target="_blank" rel="noreferrer">
                        <i className="fa-solid fa-file-pdf pdf"></i>
                    </a>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;