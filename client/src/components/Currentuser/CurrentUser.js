import { useState, useEffect, useRef} from 'react'
import {useQuery} from '@apollo/client'
import { QUERY_USER } from '../../utils/queries'
import './Currentuser.css'



const CurrentUser = () => {
const [thisUser, newUserScore] = useState(null)
const {loading,error, data,} = useQuery(QUERY_USER,{variables:{username: thisUser},pollInterval: 1000});

useEffect(() => {
    newUserScore(JSON.parse(localStorage.getItem('name')))
},[])

 if (loading) return <p>Loading...</p>;
 
 if (error) return <p style={{color:'white'}}>PLEASE LOGIN TO SAVE YOUR SCORE</p>








    return (
        <div>
            <h1 style={{color: 'white'}}>Welcome! <span style={{color: 'hotpink'}}>{data.user.username}</span>, Your <span style={{color: 'greenyellow',backgroundColor:'blue'}}>VAR</span><span style={{color: 'hotpink'}}>cade</span> Score is <span style={{color: 'yellow'}}>{data.user.score}</span></h1>
            </div>
    )
}

export default CurrentUser;
