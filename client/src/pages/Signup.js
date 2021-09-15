import '../css/background.css'
import { useState } from "react";
import { Link } from "react-router-dom";

import { Div } from "./Signup.styles";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import useLocalStorage from "../components/useLocalStorage";

const Signup = () => {
  const [name, setName] = useLocalStorage("name", "Bob");
  //this sets the starting values
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const [addUser, { error, data }] = useMutation(ADD_USER); // ADD_PROFILE and addProfile get used here

  // // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);

    // here we grab the data and put into formState
    setFormState({ ...formState, [name]: value });
    // console.log(name);
    console.log(formState); // logs all the inputs
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
    try {
      // runs the method of addProfile and on all the info in formState and puts it into data
      const { data } = await addUser({
        variables: { ...formState },
      });
      setName(data.addUser.user.username);
      console.log(data);
      console.log("USER SIGNNED IN");
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Div>
      {data ? (
        <p>
          Success! You may now head <Link to="/">back to the homepage.</Link>
        </p>
      ) : (
        <div className="background">
          <img src={"./images/cabinet3.png"} alt="wallpaper" />
          <form id='chupa' onSubmit={handleFormSubmit}>
            <span style={{color:'red',backgroundColor:'black'}} className="title">SignUp</span>
            <input
              className="nes-input is-dark"
              placeholder="Your username"
              name="username"
              type="text"
              value={formState.name}
              onChange={handleChange}
            ></input>
            <input
              className="nes-input is-dark"
              placeholder="Your Password"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            ></input>
            <button type="submit" className="nes-btn">
              Submit
            </button>
          </form>
        </div>
      )}

      {error && <div>{error.message}</div>}
    </Div>
  );
};

export default Signup;
