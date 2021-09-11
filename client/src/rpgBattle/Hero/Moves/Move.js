
import HeroMoves from './HeroMoves'
import React, { Component } from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import cloudAtkSprite from '../../Assets/Images/cloud_atk_sprite.png'
import sephAtkSprite from '../../Assets/Images/seph_atk_sprite.png'

// need to import spritesheet from another component and pass play instructions as props for enemy attack
class Moves extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    myFunctionPlay() {
        this.spritesheeInstance.goToAndPlay(1);
    }

    // myFunctionPause() {
    //     this.spritesheeInstance.pause();
    // }

    // myFunctionGetFrame() {
    //     alert(this.spritesheeInstance.getInfo('frame'));
    // }

    myFunctionToggleDirection() {
        if (this.spritesheeInstance.getInfo('direction') === 'forward') {
            this.spritesheeInstance.setDirection('rewind');
        } else if (this.spritesheeInstance.getInfo('direction') === 'rewind') {
            this.spritesheeInstance.setDirection('forward');
        }
    }

    render() {
        return (
            <div className="spriteContainer">

                <div >
                    {
                        HeroMoves.map(item => (
                            <div>
                                <a href="#" onClick={ this.myFunctionPlay.bind(this) } key={ item.id } moveName={ item.name } damage={ item.dmg }  >
                                    { item.name }

                                    {/* Dmg:  { item.dmg } */ }
                                </a>

                            </div>

                        ))
                    }
                </div>

                {/* <div>
                    <button onClick={ this.myFunctionPlay.bind(this) }>Cut</button>

                </div> */}

                <Spritesheet
                    className={ `heroSpot` }
                    image={ cloudAtkSprite }
                    widthFrame={ 382 }
                    scale={ 1 }
                    heightFrame={ 140 }
                    startAt={ 15 }
                    endAt={ 15 }
                    steps={ 15 }
                    fps={ 8 }
                    timeout={ 1800 }
                    direction={ `forward` }
                    autoplay={ false }
                    loop={ false }
                    getInstance={ spritesheet => {
                        this.spritesheeInstance = spritesheet;
                    } }
                    onLoopComplete={ this.myFunctionToggleDirection.bind(this)
                    }
                />
                {/* <Spritesheet
                    className={ `enemySpot` }
                    image={ sephAtkSprite }
                    widthFrame={ 382 }
                    scale={ 1 }
                    heightFrame={ 140 }
                    startAt={ 27 }
                    endAt={ 27 }
                    steps={ 27 }
                    fps={ 8 }
                    timeout={ 1800 }
                    direction={ `forward` }
                    autoplay={ false }
                    loop={ false }
                    getInstance={ spritesheet => {
                        this.spritesheeInstance = spritesheet;
                    } }
                    onLoopComplete={ this.myFunctionToggleDirection.bind(this)
                    }
                /> */}

            </div>
        );
    }
}

export default Moves