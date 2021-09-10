
import HeroMoves from './HeroMoves'
import React, { Component } from 'react';
import { render } from 'react-dom';
import Spritesheet from 'react-responsive-spritesheet';
import cloudAtkSprite from '../../Assets/Images/cloud_atk_sprite.png'

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

    myFunctionPause() {
        this.spritesheeInstance.pause();
    }

    myFunctionGetFrame() {
        alert(this.spritesheeInstance.getInfo('frame'));
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
            <div className="rrs-container">


                <Spritesheet
                    className={ `my-element__class--style` }
                    image={ cloudAtkSprite }
                    widthFrame={ 382 }
                    heightFrame={ 142 }
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

                <div>
                    <button onClick={ this.myFunctionPlay.bind(this) }>Attack</button>

                </div>


            </div>
        );
    }
}

export default Moves
// startAt = { 1 }
// endAt = { 15 }
// fps = { 4 }
// widthFrame = { 382 }
// heightFrame = { 142 }
// steps = { 15 }
// loop = { false }
// timeout = { 0 }
// direction = { `forward` }
// autoplay = { false }


// function Moves() {

//     return (
//         <div >
//             {
//                 HeroMoves.map(item => (
//                     <div>
//                         <a href="#" key={ item.id } moveName={ item.name } damage={ item.dmg }  >
//                             { item.name }

//                             {/* Dmg:  { item.dmg } */ }
//                         </a>

//                     </div>

//                 ))
//             }
//         </div>
//     );
// }

// export default Moves;