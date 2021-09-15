import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import "./GamesComp.css";
import { useContext } from "react";
import { UserContext } from '../../UserContext'
import Pacman from '../../images/Pacresize.gif'
import Excitebike from '../../images/Excitebike.gif'
import Duckhunt from '../../images/duckhunt.gif'
import Snake from '../../images/Snake.gif'


const GamesComp = () => {
  const { gameSelection, setGameSelected } = useContext(UserContext);
  return (
    <div>
      <img
        className="img"
        src={"./images/arcadewallpaper.png"}
        alt="arcadeWallpaper"
      />
      <div className="container">
        <div className="one">
          <Link onClick={()=>setGameSelected('Excitebike')} to={"/game1"}>
            <img src={Excitebike} alt="game2" />
          </Link>

        </div>
        <div className="two">
          <Link onClick={()=>setGameSelected('Pacman')} to={"/game1"}>
            <img src={Pacman} alt="game1" />
          </Link>
        </div>
        <div className="three">
          <Link onClick={()=>setGameSelected('Duckhunt')}to={"/game1"}>
            <img src={Duckhunt} alt="game3" />
          </Link>
        </div>
        <div className="four">
          <Link onClick={()=>setGameSelected('Snake')}to={"/game1"}>
            <img src={Snake} alt="game4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GamesComp;
