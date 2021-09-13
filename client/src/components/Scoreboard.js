import React from 'react'
import { useQuery } from "@apollo/client";
import { QUERY_SCORES } from '../utils/queries';

const Scoreboard = () => {
    const { loading, data } = useQuery(QUERY_SCORES);
    console.log("++++++++++++++++++++++++")
    console.log(data.users[0].score);

    const scoreConst = data.users[0].score

    return (
        <div>
            <div>

                <p>{ scoreConst }</p>
            </div>

        </div>

    )
}

export default Scoreboard;
