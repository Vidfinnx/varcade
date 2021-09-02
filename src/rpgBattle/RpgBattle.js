import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero'
import Enemy from './Enemy/Enemy'
import './RpgBattle.css'
import RpgHeroHealthBar from './Hero/RpgHeroHealthBar'
import RpgEnemyHealthBar from './Enemy/RpgEnemyHealthBar'

import './Hero/RpgHeroHealthBar.css'

const RpgBattle = () => {
    return (
        <div id="rpgWrapper">

            <Enemy />
            <div id="RpgEnemyHealthBar">
                <RpgEnemyHealthBar />
            </div>

            <Hero />
            <RpgHeroHealthBar />
        </div>
    )
}

export default RpgBattle