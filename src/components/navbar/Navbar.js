import React from 'react'
import "./Navbar.css";

const Navbar = ({ isScrolling }) => {
    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }


    return (
        <div className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className="navbar-logo" onClick={toTheTop} >Portfolio
            <a href={`${process.env.PUBLIC_URL}/Enrique-A-Donaire-Full-Stack-Web-Developer-2024.pdf`} className="href-tag" download target="_blank" rel="noreferrer">
                        <i className="fa-solid fa-file-pdf pdf"></i>
                    </a>
            </div>
            <span></span>
        </div>
    )
}

export default Navbar
