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
    const leaders = data.users.map((users) => users)
    console.log(leaders)
   
   

    return (
        <div className="scoreboard">
          <h1>LEADERBOARDS</h1>
          <table>
            <thead>
              <tr>
                <td>Username</td>
                <td>Score</td>
              </tr>
            </thead>
            <tbody>
              {leaders.map((item) => (
                <tr>
                  <td>{item.username}</td>
                  <td>{item.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    
    )}

export default Scoreboard;
