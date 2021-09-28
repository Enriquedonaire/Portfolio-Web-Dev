import React from 'react'
import "./About.css";
import fotoEnrique from "../../media/fotoEnrique.png";



const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc" >
                <h3>Let me tell you <br /> something about me</h3>
                <p>
                    Hi! Nice to meet you! 👋<br />
                    I'm a Full-stack Developer with
                    background in Digital Cinema and Audio-Visual
                    editing. My greatest skill is my creativity,
                    applied to solve logical problems resulting in an
                    efficient but also stimulating product for the user.
                    My mission is to interlace the technological
                    and artistic worlds, identifying the needs of the people and providing innovative and entertaining solutions.
                </p>
            </div>
            <div className="about-img" >
                <img src={fotoEnrique} alt="" />

            </div>

        </div>
    )
}

export default About
