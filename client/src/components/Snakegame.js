import React from "react";


 

  const Snakegame = () => {


  
  
  // function checkFocus() {
  //   if(document.activeElement == document.getElementsByTagName("iframe")[0]) {
  //     console.log('iframe has focus');
  //   } else {
  //     console.log('iframe not focused');
  //   }
  // }
  
  // window.setInterval(checkFocus, 1000); 



  function IFocus() {
 document.getElementsByTagName("iframe")[0].focus();
};
window.setInterval(IFocus, 300);

  return (
    <div style={{zIndex: "3"}} className="snakegame">
      <iframe scrolling = "no" title="games" src="http://vsnake.herokuapp.com"></iframe>
    </div>
  );
}

export default Snakegame;