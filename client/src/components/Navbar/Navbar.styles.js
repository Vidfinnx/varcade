import styled from "styled-components";

export const Nav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #b5b6e4;
  }

  li {
    float: left;
    padding: 14px;
  }

  li a {
    display: block;
    /* text-align: center; */
    text-decoration: none;
    text-transform: uppercase;
    /* background-color: red; */
  }
  button {
    display: block;
    text-decoration: none;
    text-transform: uppercase;
  }

  #span {
    background-color: #cec9cc;
    color: #4f43ae;
  }

  #span:hover {
    background-color: #4f43ae;
    color: #cec9cc;
  }
`;
