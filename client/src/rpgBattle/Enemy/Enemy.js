
import React, { useState, useEffect } from 'react';
import enemySprite from '../Assets/Images/sephiroth.png'
import './Enemy.css'



function Enemy() {
    return (
        <div >
            <img id="enemySprite" src={ enemySprite }></img>
        </div>
    )
}

export default Enemy