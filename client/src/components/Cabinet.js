import React from 'react'
import Image from 'react-bootstrap/Image'
import Pacman from './games/Pacman'
import Arcbottom  from '../images/joysticks.png'
import Toplogo from '../images/catop.png'








export default function  Cabinet() {
    return (
        <div className="arcadebottom">
            <div className="top">
            <Image id="toplogo" src={Toplogo} fluid></Image>
            </div>
            <Pacman/> 
            <div className="bottom">
            <Image id="joysticks" src={Arcbottom} fluid></Image>
              </div>
        </div>
    )
}
