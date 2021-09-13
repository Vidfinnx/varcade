import Enemy from './Enemy/Enemy'
import './RpgBattle.css'
import React, { useState, useEffect } from 'react';
import RpgHeroHealthBar from './Hero/RpgHeroHealthBar'
import RpgEnemyHealthBar from './Enemy/RpgEnemyHealthBar'
import Move from './Hero/Moves/Move'
import enemyMoves from './Enemy/Moves/EnemyMoves'
import CenterText from './Assets/CenterText'
// import HeroMoves from './Hero/Moves/HeroMoves'
// import GameStart from './GameStart'
// import heroAtkSprite from './Assets/Images/cloud_atk_sprite.png'
// import useSetScore from './SetScore'
// import Spritesheet from 'react-responsive-spritesheet';
// import Hero from './Hero/Hero'


const RpgBattle = () => {

    // Here is the score to be sent to the DB.
    // I am thinking of creating a 'sendScore()' function to get the
    // user name and send 'scoreText.score' to the DB. 
    // The 'sendScore()' will be invoked when the round ends on win/loss 
    // const [addScore, setAddScore] = useSetScore()

    const [scoreText, setScoreText] = useState({
        score: 0
    })

    const [heroText, setHeroText] = useState({
        text: "RPG Battle Simulator"
    })
    const [enemyText, setEnemyText] = useState({
        text: "moves as possible. More moves = more score."
    })
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
        setScoreText({ score: 0 })
    }, []);

    // Win/Loss condition. Set HP back to full after loss. 
    useEffect(() => {
        if (heroState.hp <= 0) {
            alert(`You were defeated... Your score was ${scoreText.score}... what a shame!`)
            setEnemeyState({ hp: 200 })
            setHeroState({ hp: 200 })
            setScoreText({ score: 0 })
            setHeroText({ text: null })
            setEnemyText({ text: null })
            // sendScore() will go here.

        } else if (enemyState.hp <= 0) {
            alert(`Victory! Sephiroth has been eliminated. Your score of ${scoreText.score} has been submitted!`)
            setHeroState({ hp: 200 })
            setEnemeyState({ hp: 200 })
            setScoreText({ score: 0 })
            setHeroText({ text: null })
            setEnemyText({ text: null })
        }
    }, [heroState.hp, enemyState.hp, scoreText.score])


    const handleHeroAttack = (e) => {
        e.preventDefault()
        let moveName = e.target.getAttribute("moveName")
        let moveDmg = e.target.getAttribute("damage")

        let enemyHp = enemyState.hp
        let total = enemyHp - moveDmg

        setEnemeyState({ hp: total })

        let addScore = scoreText.score + 1

        setScoreText({ score: addScore })

        setHeroText({
            text: "Cloud used " + moveName + " for " + moveDmg + " damage!"
        })




        // need to set time out here
        randomEnemyAtk()
    }

    const randomEnemyAtk = () => {

        let chosenEnemyMove = enemyMoves[Math.floor((Math.random() * enemyMoves.length))]
        let heroHp = heroState.hp
        let total = heroHp - chosenEnemyMove.dmg

        setHeroState({ hp: total })

        setTimeout(() => {
            setHeroText({
                text: "Sephiroth used " + chosenEnemyMove.name + " for " + chosenEnemyMove.dmg + " damage!"
            })
        }, 2000)

        setTimeout(() => {
            setHeroText({ text: null })
        }, 5500)




        // setEnemyText({
        //     text: "Sephiroth used " + chosenEnemyMove.name + " for " + chosenEnemyMove.dmg + " damage!"
        // })
    }

    console.log("Sephiroth: " + enemyState.hp + " HP")
    console.log("Cloud: " + heroState.hp + " HP")


    let enemyHpPercent = Math.floor((enemyState.hp / 200) * 100)
    let heroHpPercent = Math.floor((heroState.hp / 200) * 100)

    const enemyHp = [
        { bgcolor: "#FFFFFF", completed: enemyHpPercent },

    ];
    const heroHp = [
        { bgcolor: "#FFFFFF", completed: heroHpPercent },

    ];


    return (

        <div id="rpgWrapper">

            {/* Hero */ }

            <div id="RpgHeroHealthBar">
                { heroHp.map((item, idx) => (
                    <RpgHeroHealthBar heroHps={ heroState.hp } key={ idx } bgcolor={ item.bgcolor } completed={ item.completed } id="heroHealthBar" />
                )) }
            </div>

            <div onClick={ handleHeroAttack }>
                <Move />

            </div>




            {/* CENTER TEXT AREA */ }
            <div id="centralTextArea">
                <CenterText characterName={ heroText.text } />
            </div>

            <div id="scoreDiv">
                Score: <br></br>
            </div>
            <div id="scoreTextDiv">
                { scoreText.score }

            </div>



            {/* ENEMY */ }
            <div id="enemyContainer" className="nes-container with-title is-centered is-dark">
                <p className="title">Sephiroth</p>
                <div id="RpgEnemyHealthBar">

                    { enemyHp.map((item, idx) => (

                        <RpgEnemyHealthBar enemyHps={ enemyState.hp } key={ idx } bgcolor={ item.bgcolor } completed={ item.completed } id="enemyHealthBar" />

                    )) }
                </div>
                {/* <p id="sephName">Sephiroth</p> */ }
            </div>


        </div>
    )


}



export default RpgBattle
