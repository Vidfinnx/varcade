import { Link } from "react-router-dom";
import { Nav } from "./Navbar.styles";
import Auth from "../../utils/auth";

const Navbar = () => {
  // this creates the logout varaible
  // it runs the logout method that comes from utils/auth
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <Nav>
      <ul>
        <li>
          <i className="snes-logo"></i>
        </li>
        <li>
          <Link className="nes-badge" to={ "/" }>
            <span id="span" className="is-dark">
              Home
            </span>
          </Link>
        </li>
        {/* <li>
          <Link className="nes-badge" to={"/game1"}>
            <span id="span" className="is-dark">
              Game1
            </span>
          </Link>
        </li>
        <li>
          <Link className="nes-badge" to={"/game2"}>
            <span id="span" className="is-dark">
              Game2
            </span>
          </Link>
        </li> */}
        { Auth.loggedIn() ? (
          <>
            <li>
              <Link className="nes-badge" to={ "/game1" }>
                <span id="span" className="is-dark">
                  Game1
                </span>
              </Link>
            </li>
            <li>
              <Link className="nes-badge" to={ "/game2" }>
                <span id="span" className="is-dark">
                  Game2
                </span>
              </Link>
            </li>
            <li>
              <button className="nes-badge" onClick={ logout }>
                <span id="span" className="is-dark tes">
                  Logout
                </span>
              </button>
            </li>

          </>
        ) : (
          <>
            <li>
              <Link className="nes-badge" to={ "/login" }>
                <span id="span" className="is-dark">
                  Login
                </span>
              </Link>
            </li>
            <li>
              <Link className="nes-badge" to={ "/signup" }>
                <span id="span" className="is-dark">
                  Signup
                </span>
              </Link>
            </li>

          </>
        ) }
        {/* <li>
          <i class="snes-logo"></i>
        </li> */}
      </ul>
    </Nav>
  );
};

export default Navbar;
