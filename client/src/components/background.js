import background from "../arcademachinebackground.jpeg";
import '../css/background.css';
function Background() {
  return (
    <div>
        <img src={background} alt="background" className="bgam" />;
    </div>
  )
}

export default Background;