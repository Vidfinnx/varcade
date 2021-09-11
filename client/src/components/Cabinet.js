import React from 'react'
import Image from 'react-bootstrap/Image'
import Pacman from './games/Pacman'
import Arcbottom  from '../images/joysticks.png'
import Toplogo from '../images/catop.png'








export default function  Cabinet() {
    return (
        <div className="cabinet">
            <Image id="toplogo" src={Toplogo} alt="broken"/>
            <Pacman/> 
            <Image id="joysticks" src={Arcbottom} alt="broken"/>
            </div>
    )
}
