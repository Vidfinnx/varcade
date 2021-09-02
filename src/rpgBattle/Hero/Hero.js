
import React, { useState, useEffect } from 'react';
import heroSprite from '../Assets/Images/cloud.png'
import './Hero.css'
// import RpgHeroHealthBar from './RpgHeroHealthBar'

function Hero() {
    return (
        <div >
            <img id="heroSprite" src={ heroSprite }></img>

        </div>
    )
}

export default Hero