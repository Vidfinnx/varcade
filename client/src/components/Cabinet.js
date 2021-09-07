import React from 'react'
import Image from 'react-bootstrap/Image'
import Snakegame from './Snakegame'
import Arcbottom  from '../images/cabottom.png'








export default function  Cabinet() {
    return (
        <div className="arcadebottom">
            <Snakegame/>
            <Image style={{position: "absolute", left: "0",zIndex: "-1", top: "0"}} src={Arcbottom} fluid></Image>   
        </div>
    )
}
