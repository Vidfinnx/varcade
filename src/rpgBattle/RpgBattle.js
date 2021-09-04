import Hero from './Hero/Hero'
import Enemy from './Enemy/Enemy'
import './RpgBattle.css'
import React, { useState } from 'react';
import RpgHeroHealthBar from './Hero/RpgHeroHealthBar'
import RpgEnemyHealthBar from './Enemy/RpgEnemyHealthBar'



const RpgBattle = () => {


    const [heroState, setHeroState] = useState({
        name: 'Cloud',
        hp: 200,
        move1: {
            name: 'Cut',
            dmg: 20
        },
        move2: {
            name: 'Slash',
            dmg: 50
        }

    })
    const [enemyState, setEnemeyState] = useState({
        name: 'Sephiroth',
        hp: 200,
        move1: {
            name: 'Pinch',
            dmg: 20
        },
        move2: {
            name: 'Poke',
            dmg: 50
        }

    })



    const handleHeroAttack = () => {
        // let atkName = document.getElementById("atkBtn").textContent

        let hp = enemyState.hp
        let moveDmg = heroState.move1.dmg
        let total = hp - moveDmg

        setEnemeyState({ hp: total })
        // const dmg = enemyState.hp - heroState.move1.dmg
        // setEnemeyState(enemyState.hp - dmg)

        console.log(enemyState.hp)

    }


    return (
        <div id="rpgWrapper">
            <div id="RpgEnemyHealthBar">
                <Enemy />
                <RpgEnemyHealthBar />
            </div>

            <Hero />
            <RpgHeroHealthBar />
            <button id="atkBtn" onClick={ handleHeroAttack }>Cut</button>

        </div>
    )
}

export default RpgBattle