import React from 'react'
import { useQuery } from "@apollo/client";
import { QUERY_SCORES } from '../utils/queries';

const Scoreboard = () => {
    const  { data } = useQuery(QUERY_SCORES);
    console.log(data);



    return (
        <div>
        </div>
    )
}

export default Scoreboard;
