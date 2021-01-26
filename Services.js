import React, { Component } from 'react'
import ReactPlayer from "react-player";
import './Services.css';
function Services() {
    return (
        <div className="playlist">
            <ReactPlayer className="player-1" controls url="https://www.youtube.com/watch?v=pEJ7AhAnvj8"/>
            <ReactPlayer className="player-1" controls url="https://www.youtube.com/watch?v=OnbcKzlWNeE"/>
            <ReactPlayer className="player-1" controls url="https://www.youtube.com/watch?v=iYo1uS_ehQU"/>
            <ReactPlayer className="player-1" controls url="https://www.youtube.com/watch?v=pEJ7AhAnvj8"/>
        </div>
    )
}

export default Services
