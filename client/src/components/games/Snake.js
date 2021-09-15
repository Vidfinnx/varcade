import React from "react";





 

  const Thegame = () => {


  return (
    <div  className="gamecontainer">
      <iframe id="game" className="responsive-iframe"scrolling = "no" title="games" src="https://vsnake.herokuapp.com"></iframe>
    </div>
  );
}

export default Thegame;