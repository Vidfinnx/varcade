import React from 'react'
import Image from 'react-bootstrap/Image'
import Game from './Game'
import Arcbottom  from './images/cabottom.png'








export default function  Cabinet() {
    return (
        <div className="arcadebottom">
            <Game/>
            <Image src={Arcbottom} fluid></Image>   
        </div>
    )
}
