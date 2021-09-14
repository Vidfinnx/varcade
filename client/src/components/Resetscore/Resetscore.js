import { useState, useEffect} from 'react'
import { useMutation } from '@apollo/client';
import { RESET_SCORE } from '../../utils/mutations';





const Resetscore = () => {
const [thisUser, newUserScore] = useState("")
const [resetScore] = useMutation(RESET_SCORE);


useEffect(() => {
    newUserScore(JSON.parse(localStorage.getItem('name')))
},[])


    return (
        <div>
            <button onClick={()=>resetScore({variables: {username:thisUser}})}>RESET SCORE</button>
            </div>
    )
}

export default Resetscore;
