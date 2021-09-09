import React from 'react'
import Image from 'react-bootstrap/Image'
import Snakegame from './games/Snakegame'
import Arcbottom  from '../images/joysticks.png'
import Toplogo from '../images/catop.png'








export default function  Cabinet() {
    return (
        <div className="arcadebottom">
            <div className="top">
            <Image id="toplogo" src={Toplogo} fluid></Image>
            </div>
            <Snakegame/> 
            <div className="bottom">
            <Image id="joysticks" src={Arcbottom} fluid></Image>
              </div>
        </div>
    )
}
