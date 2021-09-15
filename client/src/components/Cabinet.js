import { useState, useEffect} from 'react'
import { useMutation, useLazyQuery,useQuery} from '@apollo/client'
import Image from 'react-bootstrap/Image'
import Pacman from './games/Pacman'
import Excitebike from './games/Excitebike'
import Duckhunt from './games/Duckhunt'
import Snake from './games/Snake'
import Arcbottom  from '../images/joysticks.png'
import Toplogo from '../images/catop.png'
import { UPDATE_SCORE } from '../utils/mutations'
import CurrentUser from '../components/Currentuser/CurrentUser'
import { useContext } from 'react'
import { UserContext } from '../UserContext'
import { Link } from 'react-router-dom'



const Cabinet = () => {
const {gameSelection, setGameSelected} = useContext(UserContext)
const [currentUser, newUser] = useState(null)
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
            {gameSelection === 'Pacman' && <Pacman/>} 
            {gameSelection === 'Excitebike' && <Excitebike/>}
            {gameSelection === 'Snake' && <Snake/>}
            {gameSelection === 'Duckhunt' && <Duckhunt/>}
            <button id='subbutt' onClick={()=>updateScore({variables: {username: currentUser, score: score }})}>Submit Score</button>
            <Link to={'/'}>
            <button id='subbutt'>Home</button>
            </Link>
            <Image id="joysticks" src={Arcbottom} alt="broken"/>
            </div>
    )
}

export default Cabinet;
