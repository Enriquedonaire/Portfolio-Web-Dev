import React from 'react'
import "./Cover.css";
import bg2 from "../../media/bg2.mp4";

const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={bg2} autoPlay loop muted />
                <h1>Enrique Donaire</h1>
                <p>Developer | Designer | Content Creator | Filmaker </p>
            
        </div>
    )
}

export default Cover
