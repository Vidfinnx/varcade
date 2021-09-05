import Hero from './Hero/Hero'
import Enemy from './Enemy/Enemy'
import './RpgBattle.css'
import React, { useState, useEffect } from 'react';
import RpgHeroHealthBar from './Hero/RpgHeroHealthBar'
import RpgEnemyHealthBar from './Enemy/RpgEnemyHealthBar'
import Move from './Hero/Moves/Move'
import enemyMoves from './Enemy/Moves/EnemyMoves'
// import HeroMoves from './Hero/Moves/HeroMoves'
import GameStart from './GameStart'




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




    // Win/Loss condition. Set HP back to full after loss. Will change later
    useEffect(() => {
        if (heroState.hp <= 0) {
            alert('GAMEOVER')
            setEnemeyState({ hp: 200 })
            setHeroState({ hp: 200 })
        } else if (enemyState.hp <= 0) {
            alert('YOU WIN!')
            setHeroState({ hp: 200 })
            setEnemeyState({ hp: 200 })
        }
    }, [heroState.hp, enemyState.hp])


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
    console.log(RpgEnemyHealthBar.props)

    let enemyHpPercent = Math.floor((enemyState.hp / 200) * 100)
    let heroHpPercent = Math.floor((heroState.hp / 200) * 100)

    const enemyHp = [
        { bgcolor: "#6a1b9a", completed: enemyHpPercent },

    ];
    const heroHp = [
        { bgcolor: "#6a1b9a", completed: heroHpPercent },

    ];


    return (

        <div id="rpgWrapper">

            {/* Hero */ }
            <div id="heroSpot">
                <Hero />
            </div>
            <div id="RpgHeroHealthBar">
                { heroHp.map((item, idx) => (
                    <RpgHeroHealthBar key={ idx } bgcolor={ item.bgcolor } completed={ item.completed } id="heroHealthBar" />
                )) }
            </div>
            <div id="moveDiv" onClick={ handleHeroAttack }>
                <Move />
            </div>


            {/* ENEMY */ }
            <div id="enemySpot">
                <Enemy />
            </div>
            <div id="RpgEnemyHealthBar">
                { enemyHp.map((item, idx) => (

                    <RpgEnemyHealthBar key={ idx } bgcolor={ item.bgcolor } completed={ item.completed } id="enemyHealthBar" />

                )) }
            </div>

        </div>
    )


}



export default RpgBattle
