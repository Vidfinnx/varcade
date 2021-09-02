
import React, { useState, useEffect } from 'react';
import heroSprite from '../Assets/Images/cloud.png'


function Hero() {
    return (
        <div >
            <img id="heroSprite" src={ heroSprite }></img>
        </div>
    )
}

export default Hero