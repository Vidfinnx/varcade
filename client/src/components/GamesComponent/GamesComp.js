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
        {/* <div className="one">
          <Link to={"/game2"}>
            <img src={"./images/pacman.png"} alt="game1" />
          </Link>
        </div> */}
        <div class="two">
          <Link to={"/game1"}>
            <img src={"./images/pacman.png"} alt="game1" />
          </Link>
        </div>

        {/* <div class="three">3</div>
        <div class="four">4</div> */}
      </div>
    </div>
  );
};

export default GamesComp;
