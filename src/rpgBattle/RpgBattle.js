import React, { useState, useEffect, Component } from 'react';
import Hero from './Hero/Hero'
import Enemy from './Enemy/Enemy'
import './RpgBattle.css'
import RpgHeroHealthBar from './Hero/RpgHeroHealthBar'
import RpgEnemyHealthBar from './Enemy/RpgEnemyHealthBar'


class RpgBattle extends Component {

    state = {
        playerName: "Cloud",
        playerHP: 200,
        playerMaxHP: 200,
        playerAttacks: {
            attackOne: { name: "Omni Slash", damage: 10 },
            attackTwo: { name: "Cross Slash", damage: 30 },

        },
        playerFaint: "",
        enemyName: "Sephiroth",
        enemyHP: 200,
        enemyMaxHP: 200,
        enemyAttackNames: ["Hex", "Octo-Slash"],
        enemyAttackDamage: [10, 30],
        enemyFaint: "",
        textMessageOne: " ",
        textMessageTwo: "",
        gameOver: false
    };

    enemyTurn = (enemyAttackName, enemyAttackDamage) => {
        enemyAttackDamage = enemyAttackDamage + Math.floor(Math.random() * 11);
        // first, check if enemy fainted. End Game if they did.
        if (this.state.enemyHP === 0) {
            this.setState(
                {
                    textMessageOne: `${this.state.enemyName} fainted.`,
                    textMessageTwo: `${this.state.playerName} wins!`,
                    enemyFaint: true
                },
                () => {
                    setTimeout(() => {
                        this.setState({
                            gameOver: true
                        });
                    }, 3000);
                }
            );
        } else {
            // if enemy is still alive, proceed with enemy turn

            this.setState(
                prevState => {
                    if (prevState.playerHP - enemyAttackDamage <= 0) {
                        return {
                            playerHP: 0,
                            textMessageOne: `${this.state.enemyName
                                } used ${enemyAttackName} for ${enemyAttackDamage} damage!`
                        };
                    } else {
                        return {
                            playerHP: prevState.playerHP - enemyAttackDamage,
                            textMessageOne: `${this.state.enemyName
                                } used ${enemyAttackName} for ${enemyAttackDamage} damage!`
                        };
                    }
                },
                () => {
                    setTimeout(() => {
                        if (this.state.playerHP === 0) {
                            this.setState(
                                {
                                    textMessageOne: `${this.state.playerName} fainted.`,
                                    textMessageTwo: `${this.state.enemyName} wins!`,
                                    playerFaint: true
                                },
                                () => {
                                    setTimeout(() => {
                                        this.setState({
                                            gameOver: true
                                        });
                                    }, 3000);
                                }
                            );
                        } else {
                            this.setState({
                                textMessageOne: ""
                            });
                        }
                    }, 2000);
                }
            );
        }
    };

    handleAttackClick = (name, damage) => {
        // implicit return single value
        // this.setState(prevState => ({
        //   enemyHP: prevState.enemyHP - damage
        // }));

        damage = damage + Math.floor(Math.random() * 11);

        // use attack to calculate enemy HP and adjust progress bar
        this.setState(
            prevState => {
                if (prevState.enemyHP - damage <= 0) {
                    return {
                        enemyHP: 0,
                        textMessageOne: `${this.state.playerName
                            } used ${name} for ${damage} damage!`
                    };
                } else {
                    return {
                        enemyHP: prevState.enemyHP - damage,
                        textMessageOne: `${this.state.playerName
                            } used ${name} for ${damage} damage!`
                    };
                }
            },
            () => {
                // wait X seconds before enemy attacks
                setTimeout(() => {
                    // calc next enemy attack name and damage
                    let enemyAttack = Math.floor(Math.random() * 2);
                    let enemyAttackDamage = this.state.enemyAttackDamage[enemyAttack];
                    let enemyAttackName = this.state.enemyAttackNames[enemyAttack];

                    // once the state is changed, start enemy turn
                    this.enemyTurn(enemyAttackName, enemyAttackDamage);
                }, 3000);
            }
        );
    };

    handlePlayAgain = () => {
        console.log("play again!!!");
        this.setState({
            playerHP: this.state.playerMaxHP,
            enemyHP: this.state.enemyMaxHP,
            gameOver: false,
            textMessageOne: "",
            textMessageTwo: "",
            enemyFaint: false,
            playerFaint: false
        });
    };

}


export default RpgBattle