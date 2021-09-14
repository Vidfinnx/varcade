
import HeroMoves from './HeroMoves';
import React, { Component } from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import cloudAtkSprite from '../../Assets/Images/cloud_atk_sprite.png';
import sephAtkSprite from '../../Assets/Images/seph_atk_sprite.png';

class Moves extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    myFunctionPlay() {
        this.spritesheeInstance.goToAndPlay(1)
        setTimeout(() => {
            this.spritesheeInstance2.goToAndPlay(1)
        }, 2000)
    }

    myFunctionToggleDirection() {
        if (this.spritesheeInstance.getInfo('direction') === 'forward') {
            this.spritesheeInstance.setDirection('rewind');
        } else if (this.spritesheeInstance.getInfo('direction') === 'rewind') {
            this.spritesheeInstance.setDirection('forward');
        }
    }

    render() {
        return (
            <div className="spriteContainer" >
                <div id="movesWindow" className="nes-container with-title is-dark">
                    <p className="title">Cloud</p>

                    <div id="heroMoves">
                        {
                            HeroMoves.map(item => (
                                <div>
                                    <button type="button" className="nes-btn is-primary" onClick={ this.myFunctionPlay.bind(this) } key={ item.id } moveName={ item.name } damage={ item.dmg }  >
                                        { item.name }
                                        <br></br><br></br>
                                        Dmg:{ item.dmg }
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <Spritesheet
                    className={ `heroSpot` }
                    image={ cloudAtkSprite }
                    widthFrame={ 194 }
                    scale={ 1 }
                    heightFrame={ 125 }
                    startAt={ 12 }
                    endAt={ 12 }
                    steps={ 12 }
                    fps={ 8 }
                    timeout={ 2000 }
                    direction={ `forward` }
                    autoplay={ false }
                    loop={ false }
                    getInstance={ spritesheet => {
                        this.spritesheeInstance = spritesheet;
                    } }
                    onLoopComplete={ this.myFunctionToggleDirection.bind(this)
                    }
                />

                <Spritesheet
                    className={ `enemySpot` }
                    image={ sephAtkSprite }
                    widthFrame={ 280 }
                    scale={ 1 }
                    heightFrame={ 185 }
                    startAt={ 27 }
                    endAt={ 27 }
                    steps={ 27 }
                    fps={ 8 }
                    timeout={ 1800 }
                    direction={ `forward` }
                    autoplay={ false }
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