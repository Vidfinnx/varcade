import React from 'react'
import Image from 'react-bootstrap/Image'
import Pacman from '../images/Pacresize.gif'

export default function Game() {
    return (
        <div className="gamevid">
             <Image src={Pacman} fluid />
        </div>
    )
}
