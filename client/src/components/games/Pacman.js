import React from "react";





 

  const Thegame = () => {


    

  
  
  // function checkFocus() {
  //   if(document.activeElement == document.getElementsByTagName("iframe")[0]) {
  //     console.log('iframe has focus');
  //   } else {
  //     console.log('iframe not focused');
  //   }
  // }
  
  // window.setInterval(checkFocus, 1000); 



//   function IFocus() {
//  document.getElementsByTagName("iframe")[0].focus();
// };
// window.setInterval(IFocus, 300);

  return (
    <div  className="gamecontainer">
      <iframe id="game" className="responsive-iframe"scrolling = "no" title="games" src="/dist/index.html"></iframe>
    </div>
  );
}

export default Thegame;