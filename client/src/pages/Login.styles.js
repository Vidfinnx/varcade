import styled from "styled-components";

export const Div = styled.div`
  /* .background {
    background-color: black;
    height: 100vh;
  } */

  img {
    width: 100%;
    height: 800px;
    position: absolute;
  }

  form {
    background: #495c70;
    height: 100%;
    width: 40%;
    font-family: joystix;
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 80px 20px 80px 20px;
    text-align: center;
    border: 5px solid black;
    position: relative;
    left: 31%;
    top: 130px;
  }

  input[type="text"] {
    /* font-family: joystix; */
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid black;
  }

  .title {
    font-size: 2rem;
  }

  @font-face {
    font-family: joystix;
    src: url(font/joystix\ monospace.ttf);
  }
`;
