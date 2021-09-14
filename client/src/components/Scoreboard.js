import React from 'react'
import { useQuery } from "@apollo/client";
import { QUERY_SCORES } from '../utils/queries';

const Scoreboard = () => {
    const { loading, data } = useQuery(QUERY_SCORES);
    console.log("++++++++++++++++++++++++")
    console.log(data);


    return (
        <div>
            <div>

                <p>{ }</p>
            </div>

        </div>

    )
}

export default Scoreboard;
