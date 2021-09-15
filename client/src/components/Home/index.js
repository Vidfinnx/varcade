import { Link } from "react-router-dom";
// import { DIV } from "./Home.styles";
// import Auth from "../../utils/auth";
// import homeBackground from "../homeBackground";
import { Div } from "./Home.styles";
import cloudStanding from '../../rpgBattle/Assets/Images/cloudStanding.gif'
const Home = () => {
  return (
    <Div>
      <img src={ cloudStanding } id="cloudStanding"></img>
      <img src={ "./images/arcadewallpaper.png" } alt="arcadeWallpaper" />
      <div className="container">
        <div className="one">
          <Link to={ "/game1" }>
            <img src={ "./images/game1.jpg" } alt="game1" />
            {/* <p>Game 1</p> */ }
          </Link>
        </div>
        {/* <div class="two">2</div>
        <div class="three">3</div>
        <div class="four">4</div> */}
      </div>
    </Div>
  );
};

export default Home;

// const Home = () => {
//   return (
//     // <homeBackground>
//     <DIV>
//       <div className="background">
//         {/* <div> */}
//         <div className="container">
//           <div className="test">
//             <Link to={"/game1"}>
//               <img src={"./images/game1.jpg"} alt="game1" />
// {/* <p className="card-desc">
//   Pinnipeds, commonly known as seals,[a] are a widely distributed
//   and diverse clade of carnivorous, fin-footed, semiaquatic marine
//   mammals. They comprise the extant families Odobenidae (whose
//   only living member is the walrus), Otariidae (the eared seals:
//   sea lions and fur seals), and Phocidae (the earless seals, or
//   true seals).
// </p>{" "} */}
//             </Link>
//           </div>

//           {/*
//           <div className="card">
//             <h2 className="card-title">Game2</h2>
//             <Link to={"/game2"}>
//               <img src={"./images/game1.jpg"} alt="game2" />
//                <p className="card-desc">
//                 Pinnipeds, commonly known as seals,[a] are a widely distributed
//                 and diverse clade of carnivorous, fin-footed, semiaquatic marine
//                 mammals. They comprise the extant families Odobenidae (whose
//                 only living member is the walrus), Otariidae (the eared seals:
//                 sea lions and fur seals), and Phocidae (the earless seals, or
//                 true seals).
//               </p>
//             </Link>
//           </div>
//         */}
//         </div>
//       </div>

//       {/* </div> */}
//     </DIV>
//     // </homeBackground>
//   );
// };

// export default Home;
