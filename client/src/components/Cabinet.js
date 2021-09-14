import { useState, useEffect} from 'react'
import { useMutation, useLazyQuery,useQuery} from '@apollo/client'
import Image from 'react-bootstrap/Image'
import Pacman from './games/Pacman'
import Excitebike from './games/Excitebike'
import Arcbottom  from '../images/joysticks.png'
import Toplogo from '../images/catop.png'
import { UPDATE_SCORE } from '../utils/mutations'
import CurrentUser from '../components/Currentuser/CurrentUser'
import Navbar from './Navbar'



const Cabinet = () => {
const [currentUser, newUser] = useState("")
const [updateScore] = useMutation(UPDATE_SCORE)



useEffect(() => {
    newUser(JSON.parse(localStorage.getItem('name')))
    localStorage.setItem('Pacman',0)
},[])

const score = JSON.parse(localStorage.getItem('Pacman'))


    return (
        <div className="cabinet">
            <CurrentUser/>
            <Image id="toplogo" src={Toplogo} alt="broken"/>
            <Pacman/> 
            {/* <Excitebike/> */}
            <button  onClick={()=>updateScore({variables: {username: currentUser, score: score }})}>Submit Score</button>
            <Image id="joysticks" src={Arcbottom} alt="broken"/>
            </div>
    )
}

export default Cabinet;
