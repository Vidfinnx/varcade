import React from "react";
import EnemyMoves from './EnemyMoves'


function EnemyMove() {

    return (
        <div >
            {
                EnemyMoves.map(item => (
                    <button key={ item.id } moveName={ item.name } damage={ item.dmg } >
                        { item.name }
                        <br></br>
                        Dmg:  { item.dmg }
                    </button>
                ))
            }
        </div>
    );
}

export default EnemyMove;
