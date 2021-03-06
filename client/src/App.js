import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Cabinet from "./components/Cabinet";


// import {Router} from "react router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import HomeBackground from "./components/HomeBackground";
import Name from "./components/Name";
import Scoreboard from './components/Scoreboard/Scoreboard'
import { UserContext } from "./UserContext";
import { useState } from "react";
import CurrentUser from "./components/Currentuser/CurrentUser";
import RpgBattle from "./rpgBattle/RpgBattle";
import GamesComp from "./components/GamesComponent/GamesComp";
import Auth from "../src/utils/auth";

const httpLink = createHttpLink({
  uri: "/graphql", //The URI of the GraphQL endpoint that Apollo Client will communicate with.
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // You can provide an Apollo Link instance to serve as Apollo Client's network layer.
  link: authLink.concat(httpLink),
  // The cache that Apollo Client should use to store query results locally.
  cache: new InMemoryCache(),
});
function App() {
  const [gameSelection, setGameSelected] = useState("no game selected");
  return (
    <ApolloProvider client={ client }>
      <Router>
        <Switch>

      <UserContext.Provider  value={{gameSelection, setGameSelected}}>
          <Route exact path="/">
            <Navbar />
            {Auth.loggedIn() && <CurrentUser/>}
            <Scoreboard />
            <Name />
            <GamesComp />
          </Route>
       

            <Route exact path="/signup">
              <Navbar />
              <Name />
              <Signup />
              {/* <Home /> */ }
            </Route>

            <Route exact path="/login">
              <Scoreboard />
              <Navbar />
              <Name />
              <Login />
              {/* <Home /> */ }
            </Route>


            <Route exact path="/game1">
              <Cabinet />
            </Route>
            <Route exact path="/rpgBattle">
              <RpgBattle />
              {/* <Touchcontrols/> */ }
            </Route>

            <Route exact path="*" redirect="/" />
          </UserContext.Provider>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
