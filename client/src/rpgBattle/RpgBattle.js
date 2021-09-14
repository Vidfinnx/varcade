import './RpgBattle.css';
import React, { useState, useEffect } from 'react';
import RpgHeroHealthBar from './Hero/RpgHeroHealthBar';
import RpgEnemyHealthBar from './Enemy/RpgEnemyHealthBar';
import Move from './Hero/Moves/Move';
import enemyMoves from './Enemy/Moves/EnemyMoves';
import CenterText from './Assets/CenterText';
import useSound from 'use-sound';
import battleTheme from './Assets/Audio/battleTheme.mp3';
import cloudAtkSound from './Assets/Audio/cloudAtkSound.mp3';
import sephAtkSound from './Assets/Audio/sephAtkSound.mp3';
import victoryTheme from './Assets/Audio/victoryClip.mp3';

const RpgBattle = () => {
    const [playVictory, { stopVictory }] = useSound(victoryTheme, { volume: 0.25, soundEnabled: true })
    const [playCloudAtk, { stopCloudAtk }] = useSound(cloudAtkSound, { volume: 0.45 });
    const [playSephAtk, { stopSephAtk }] = useSound(sephAtkSound, { volume: 0.45 });
    const [play, { stop }] = useSound(battleTheme, { volume: 0.25, play: false });
    const [modal, setModal] = useState(false)
    const [scoreText, setScoreText] = useState({
        score: 0
    })
    const [heroText, setHeroText] = useState({
        text: null
    })
    const [enemyText, setEnemyText] = useState({
        text: "Rpg Battle Simulator"
    })
    const [heroState, setHeroState] = useState({
        name: 'Cloud',
        hp: 400,
    })
    const [enemyState, setEnemeyState] = useState({
        name: 'Sephiroth',
        hp: 400,
    })

    useEffect(() => {
        setEnemeyState({ hp: 400 })
        setHeroState({ hp: 400 })
        setScoreText({ score: 0 })
    }, []);


    function resetGame() {
        setEnemeyState({ hp: 400 })
        setHeroState({ hp: 400 })
        setHeroText({ text: null })
        setEnemyText({ text: null })
    }

    useEffect(() => {
        if (heroState.hp <= 0) {
            alert(`You were defeated... Your score was ${scoreText.score}... what a shame!`)
            resetGame()
        }
        if (enemyState.hp <= 0) {
            setModal({ show: true })
            stop()
            setEnemeyState({ hp: 400 })
            playVictory()
            resetGame()
        }
    }, [heroState.hp, enemyState.hp, scoreText.score])

    const handleHeroAttack = (e) => {
        e.preventDefault()
        playCloudAtk()

        let moveName = e.target.getAttribute("moveName")
        let moveDmg = e.target.getAttribute("damage")
        let enemyHp = enemyState.hp
        let total = enemyHp - moveDmg
        let addScore = scoreText.score + 1

        setHeroText({
            text: "Cloud used " + moveName + " for " + moveDmg + " damage!"
        })
        setEnemeyState({ hp: total })
        setScoreText({ score: addScore })
        setEnemyText({ text: null })

        randomEnemyAtk()
    }

    const randomEnemyAtk = () => {
        let chosenEnemyMove = enemyMoves[Math.floor((Math.random() * enemyMoves.length))]
        let heroHp = heroState.hp
        let total = heroHp - chosenEnemyMove.dmg

        setTimeout(() => {
            setHeroState({ hp: total })
            playSephAtk()
            setTimeout(() => {
                playSephAtk()
            }, 1000)
            setTimeout(() => {
                playSephAtk()
            }, 2000)
        }, 2000)

        setTimeout(() => {
            setHeroText({
                text: "Sephiroth used " + chosenEnemyMove.name + " for " + chosenEnemyMove.dmg + " damage!"
            })
        }, 2000)

        setTimeout(() => {
            setHeroText({ text: null })
        }, 5500)
    }

    let enemyHpPercent = Math.floor((enemyState.hp / 400) * 100)
    let heroHpPercent = Math.floor((heroState.hp / 400) * 100)

    const enemyHp = [
        { bgcolor: "#FFFFFF", completed: enemyHpPercent },
    ];
    const heroHp = [
        { bgcolor: "#FFFFFF", completed: heroHpPercent },

    ];

    return (
        <div id="rpgWrapper">
            <a href="http://localhost:3000/varcade" id="exitBtn">Exit</a>
            <dialog className="nes-dialog" id="dialog-default" name="modalWindow" open={ modal } >
                <form method="dialog">
                    <p>Victory! Sephiroth has been eliminated. <br></br><br></br>Your score of { scoreText.score } has been submitted!</p>
                    <menu className="dialog-menu">
                        <button className="nes-btn is-primary" id="okButton" onClick={ () => { setScoreText({ score: 0 }); resetGame() } }>OK!</button>
                    </menu>
                </form>
            </dialog>

            <div id="musicContainer">
                <p id="musicTxt">Music:</p>
                <div id="musicRadio" >
                    <label>
                        <input type="radio" name="musicRadioBtn" className="nes-radio is-dark" onClick={ () => { play() } } />
                        <span>On</span>
                    </label>
                    <label>
                        <input type="radio" name="musicRadioBtn" className="nes-radio is-dark" onClick={ () => { stop() } } defaultChecked />
                        <span>Off</span>
                    </label>
                </div>
            </div>

            <div id="RpgHeroHealthBar">
                { heroHp.map((item, idx) => (
                    <RpgHeroHealthBar heroHps={ heroState.hp } key={ idx } bgcolor={ item.bgcolor } completed={ item.completed } id="heroHealthBar" />
                )) }
            </div>

            <div onClick={ handleHeroAttack }>
                <Move />
            </div>

            <div id="centralTextArea">
                <CenterText characterName={ heroText.text } />
                <div id="rpgTitle">
                    <CenterText characterName={ enemyText.text } />

                </div>
            </div>

            <div id="scoreDiv">
                Score: <br></br>
            </div>

            <div id="scoreTextDiv">
                { scoreText.score }
            </div>

            <div id="enemyContainer" className="nes-container with-title is-centered is-dark">
                <p className="title">Sephiroth</p>
                <div id="RpgEnemyHealthBar">
                    { enemyHp.map((item, idx) => (
                        <RpgEnemyHealthBar enemyHps={ enemyState.hp } key={ idx } bgcolor={ item.bgcolor } completed={ item.completed } id="enemyHealthBar" />
                    )) }
                </div>
            </div>
        </div >
    )
}

export default RpgBattle