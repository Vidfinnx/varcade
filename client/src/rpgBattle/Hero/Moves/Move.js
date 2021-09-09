import React from "react";
import HeroMoves from './HeroMoves'

function Moves() {

    return (
        <div >
            {
                HeroMoves.map(item => (
                    <div>
                        <a href="#" key={ item.id } moveName={ item.name } damage={ item.dmg }  >
                            { item.name }

                            {/* Dmg:  { item.dmg } */ }
                        </a>

                    </div>

                ))
            }
        </div>
    );
}

export default Moves;
