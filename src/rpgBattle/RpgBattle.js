import Hero from './Hero/Hero'
import Enemy from './Enemy/Enemy'
import './RpgBattle.css'
import React, { useState, useEffect } from 'react';
import RpgHeroHealthBar from './Hero/RpgHeroHealthBar'
import RpgEnemyHealthBar from './Enemy/RpgEnemyHealthBar'
import Move from './Hero/Moves/Move'
import enemyMoves from './Enemy/Moves/EnemyMoves'
// import HeroMoves from './Hero/Moves/HeroMoves'


const RpgBattle = () => {


    const [heroState, setHeroState] = useState({
        name: 'Cloud',
        hp: 200,
    })
    const [enemyState, setEnemeyState] = useState({
        name: 'Sephiroth',
        hp: 200,
    })

    // Resets HP after page reload
    useEffect(() => {
        setEnemeyState({ hp: 200 })
        setHeroState({ hp: 200 })
    }, []);



    const handleHeroAttack = (e) => {
        e.preventDefault()
        let moveName = e.target.getAttribute("moveName")
        let moveDmg = e.target.getAttribute("damage")

        let enemyHp = enemyState.hp
        let total = enemyHp - moveDmg

        setEnemeyState({ hp: total })
        console.log("Cloud used " + moveName + " for " + moveDmg + " damage!")

        // need to set time out here
        randomEnemyAtk()
    }

    const randomEnemyAtk = () => {
        let chosenEnemyMove = enemyMoves[Math.floor((Math.random() * enemyMoves.length))]


        let heroHp = heroState.hp
        let total = heroHp - chosenEnemyMove.dmg

        setHeroState({ hp: total })

        console.log("Sephiroth used " + chosenEnemyMove.name + " for " + chosenEnemyMove.dmg + " damage!")
    }



    console.log("Sephiroth: " + enemyState.hp + " HP")
    console.log("Cloud: " + heroState.hp + " HP")


    return (

        <div id="rpgWrapper">
            <div id="RpgEnemyHealthBar">
                <Enemy />
                <RpgEnemyHealthBar />
            </div>

            <Hero />
            <RpgHeroHealthBar />
            {/* <button className="atkBtn" onClick={ handleHeroAttack }>Cut</button> */ }
            <div id="moveDiv" onClick={ handleHeroAttack }>
                <Move />
            </div>

        </div>
    )
}

export default RpgBattle
