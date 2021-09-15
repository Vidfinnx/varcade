import React from 'react'
import './scoreboard.css'
import { useQuery } from "@apollo/client";
import { QUERY_SCORES } from '../../utils/queries';
// import { useContext } from "react";
// import { UserContext } from "../../UserContext";

const Scoreboard = () => {
    const   {loading, data}  = useQuery(QUERY_SCORES);
    // const {loggedInUser, setLoggedIn} = useContext(UserContext)
  
    if (loading) return <p>Loading...</p>;
    const leaders = data.users.map((users) => users);
    // console.log(leaders)

    const scores = data.users.map((scores) => scores.score);
    // console.log(scores)
    const names = data.users.map((names) => names.username);
    // console.log(names)
    
  

    return (
        <div className="scoreboard">
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
