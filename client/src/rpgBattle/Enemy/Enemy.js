
// import React, { useState, useEffect } from 'react';
// import enemySprite from '../Assets/Images/sephiroth.png'
// import './Enemy.css'


import React, { Component } from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import sephAtkSprite from '../Assets/Images/seph_atk_sprite.png'
import EnemyMoves from './Moves/EnemyMoves';
// need to import spritesheet from another component and pass play instructions as props for enemy attack
class Moves extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    myFunctionPlay() {
        this.spritesheeInstance2.goToAndPlay(1);
    }

    // myFunctionPause() {
    //     this.spritesheeInstance.pause();
    // }

    // myFunctionGetFrame() {
    //     alert(this.spritesheeInstance.getInfo('frame'));
    // }

    myFunctionToggleDirection() {
        if (this.spritesheeInstance2.getInfo('direction') === 'forward') {
            this.spritesheeInstance2.setDirection('rewind');
        } else if (this.spritesheeInstance2.getInfo('direction') === 'rewind') {
            this.spritesheeInstance2.setDirection('forward');
        }
    }

    render() {
        return (
            <div className="enemySpriteContainer">


                {/* <div>
                    <button onClick={ this.myFunctionPlay.bind(this) }>Cut</button>

                </div> */}

                <Spritesheet
                    className={ `enemySpot` }
                    image={ sephAtkSprite }
                    widthFrame={ 280 }
                    scale={ 1 }
                    heightFrame={ 185 }
                    startAt={ 1 }
                    endAt={ 27 }
                    steps={ 27 }
                    fps={ 8 }
                    timeout={ 1800 }
                    direction={ `forward` }
                    autoplay={ true }
                    loop={ false }
                    getInstance={ spritesheet2 => {
                        this.spritesheeInstance2 = spritesheet2;
                    } }
                    onLoopComplete={ this.myFunctionToggleDirection.bind(this)
                    }
                />

            </div>
        );
    }
}

export default Moves