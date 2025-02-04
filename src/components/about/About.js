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
                I'm a Full-Stack Developer with a background in Digital Cinema and Video Editing. My greatest strength is my creativity, which I apply to solve complex problems with elegant, efficient, and user-centric solutions. With experience in React, Next.js, TypeScript, and Node.js, I thrive at the intersection of technology and design, crafting high-performance applications that are both functional and visually engaging. My mission is to bridge technology and creativity, identifying user needs and delivering intuitive, dynamic, and impactful digital experiences.
                </p>
            </div>
            <div className="about-img" >
                <img src={fotoEnrique} alt="" />

            </div>

        </div>
    )
}

export default About
