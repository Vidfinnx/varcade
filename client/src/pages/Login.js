
import '../css/background.css'
import { useContext,useState } from "react";


import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

import { Div } from "./Login.styles";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { LOGIN_USER } from "../utils/mutations";
import useLocalStorage from "../components/useLocalStorage";


const Login = (props) => {
  const [name, setName] = useLocalStorage("name", "Bob");
  const { loggedInUser, setLoggedIn } = useContext(UserContext)
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER); // this calls the LOGIN_Mutaion and the login method

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value, });


  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("+++++++@@@")
    console.log(loggedInUser)
    console.log(formState);
    console.log("+++++++@@@")
    try {
      const { data } = await login({
        variables: { ...formState },

      });
      setName(data.login.user.username);
      console.log("*********");
      console.log(data);
      console.log("USER LOGGED IN");
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values

    setFormState({
      username: "",
      password: "",
    });
  };
  return (
    <Div>
      { data ? (
        <p>
          Success! You may now head <Link to="/">back to the homepage.</Link>
        </p>
      ) : (

        <div className="background">
          <img src={"./images/cabinet3.png"} alt="wallpaper" />
          <form id="chupa" onSubmit={handleFormSubmit}>
            <span style={{color:'red',backgroundColor:'black'}} className="title">Login</span>

            <input
              className="nes-input is-dark"
              placeholder="Your username"
              name="username"
              type="text"
              value={ formState.name }
              onChange={ handleChange }
            />
            <input
              className="nes-input is-dark"
              placeholder="Your Password"
              name="password"
              type="password"
              value={ formState.password }
              onChange={ handleChange }
            />
            <button
              className="nes-btn"
              style={ { cursor: "pointer" } }
              type="submit"

            >
              Submit
            </button>
          </form>
        </div>
      ) }
      { error && <div>{ error.message }</div> }
    </Div>
  );
};

export default Login;
