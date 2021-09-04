import React from "react";
import HeroMoves from './HeroMoves'


function Moves() {

    return (
        <div >
            {
                HeroMoves.map(item => (
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

export default Moves;
