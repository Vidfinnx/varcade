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
          <Link to={"/game1"}>
            <img src={"./images/game1.jpg"} alt="game1" />
            {/* <p>Game 1</p> */}
          </Link>
        </div>
        {/* <div class="two">2</div>
        <div class="three">3</div>
        <div class="four">4</div> */}
      </div>
    </div>
  );
};

export default GamesComp;
