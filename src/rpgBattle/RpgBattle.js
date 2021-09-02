import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero'
import Enemy from './Enemy/Enemy'
import './RpgBattle.css'

import RpgHeroHealthBar from './Hero/RpgHeroHealthBar'
import RpgEnemyHealthBar from './Enemy/RpgEnemyHealthBar'


const RpgBattle = () => {
    return (
        <div id="rpgWrapper">


            <div id="RpgEnemyHealthBar">
                <Enemy />
                <RpgEnemyHealthBar />






            </div>

            <Hero />
            <div id="RpgHeroHealthbar">
                <RpgHeroHealthBar />
            </div>

        </div>
    )
}

export default RpgBattle