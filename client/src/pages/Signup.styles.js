import styled from "styled-components";

export const Div = styled.div`
  form {
    font-family: joystix;
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    text-align: center;
    border: 3px solid green;
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

  @font-face {
    font-family: joystix;
    src: url(font/joystix\ monospace.ttf);
  }
`;
