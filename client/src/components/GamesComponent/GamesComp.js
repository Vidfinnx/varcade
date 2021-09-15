import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import "./GamesComp.css";

const GamesComp = () => {
  return (
    <div>
      <img
        className="img"
        src={"./images/arcadewallpaper.png"}
        alt="arcadeWallpaper"
      />
      <div className="container">
        <div className="one">
          <Link to={"/game2"}>
            <img src={"./images/pacman.png"} alt="game2" />
          </Link>

        </div>
        <div className="two">
          <Link to={"/game1"}>
            <img src={"./images/pacman.png"} alt="game1" />
          </Link>
        </div>
        <div className="three">
          <Link to={"/game3"}>
            <img src={"./images/pacman.png"} alt="game3" />
          </Link>
        </div>
        <div className="four">
          <Link to={"/game4"}>
            <img src={"./images/pacman.png"} alt="game4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GamesComp;
