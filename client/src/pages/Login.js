import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { LOGIN_USER } from "../utils/mutations";

const Login = (props) => {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER); // this calls the LOGIN_Mutaion and the login method

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
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
    <div>
      {data ? (
        <p>
          Success! You may now head <Link to="/">back to the homepage.</Link>
        </p>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <input
            className="nes-input is-dark"
            placeholder="Your username"
            name="username"
            type="username"
            value={formState.name}
            onChange={handleChange}
          />
          <input
            className="nes-input is-dark"
            placeholder="Your Password"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
          />
          <button
            className="nes-btn"
            style={{ cursor: "pointer" }}
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default Login;
