import React from 'react'
import './scoreboard.css'
import { useQuery } from "@apollo/client";
import { QUERY_SCORES } from '../../utils/queries';
import Coin from '../../images/Coin.gif'


const Scoreboard = () => {
    const   {loading,error, data}  = useQuery(QUERY_SCORES,{variables:{},pollInterval: 5000});
    // const {loggedInUser, setLoggedIn} = useContext(UserContext)
  
    if (loading) return <p>Loading...</p>;
    if (error) return `Error! ${error}`;
    const leaders = data.users.map((users) => users);
    // console.log(leaders)


    return (
        <div className="scoreboard">
          <img id="coin" src={Coin}></img>
          <img id="coin2" src={Coin}></img>
          <h1><span style={{backgroundColor:'blue', fontSize:'2rem'}}>LEADERBOARDS</span></h1>
         
           <table>
            <thead>
              <tr>
                <td style={{textDecoration:'magenta double underline',color:'paleturquoise'}}>Username</td>
                <td style={{textDecoration:'magenta double underline',color:'paleturquoise'}}>Score</td>
              </tr>
            </thead>
            <tbody>
              {leaders.map((item) => (
                <tr>
                    <td>{item.username}</td>
                  <td style={{color:'yellow'}}>{item.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
    
    )}

export default Scoreboard;
