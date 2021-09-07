import './App.css'
import Archeader from './components/Archeader'
import Cabinet from './components/Cabinet'
import Touchcontrols from './components/Touchcontrols';
import Background from "./components/background";
// import {Router} from "react router";


function App() {
  return (
  <div className="App">
    {/* <Background> */}
      {/* <Router>    */}
      <Archeader/>
       <Cabinet/>
       {/* <Touchcontrols/> */}
      {/* </Router> */}
    {/* </Background> */}
    </div>
  );
}

export default App;
