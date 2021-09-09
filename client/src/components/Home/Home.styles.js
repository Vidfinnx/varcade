import styled from "styled-components";

export const DIV = styled.div`
  * {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }

  .background {
    background-image: url("./images/arcade2.png");
    /* Full height */
    height: 100%;
    width: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* position: relative; */
  }
  /* .background::before {
    height: 800px;
  }
  .background::after {
    height: 800px; 
}
    */
  .test {
    /* position: absolute; */
    /* display: inline-block; */
    /* position: absolute; */
    /* width: 50px; */
    /* top: 2000px; */
    /* height: 20px; */
    width: 100%;
    height: 850px;
    position: relative;
  }
  img {
    transform: rotate(-30deg); /* Equal to rotateZ(45deg) */
    position: absolute;
    width: 150px;
    height: 150px;
    top: 400px;
    right: 0;
  }
  /* 

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #34495e;
  }
  .cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    position: absolute;
  } */

  /* 
  .card {
    margin: 40px;
    position: relative;
    max-width: 250px;
    max-height: 350px;
}
    box-shadow: 0 40px 60px -6px black;

  .card-title {
    display: block;
    text-align: center;
    color: #fff;
    background-color: #6184a8;
    padding: 2%;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }

  .card img {
    width: 100%;
    height: 98%;
    object-fit: cover;
    display: block;
    position: relative;
  }

  .card-desc {
    display: block;
    font-size: 1.2rem;
    position: absolute;
    height: 0;
    top: 0;
    opacity: 0;
    padding: 18px 8%;
    background-color: white;
    overflow-y: scroll;
    transition: 0.8s ease;
  }

  .card:hover .card-desc {
    opacity: 1;
    height: 100%;
  }

  h1 {
    font-size: 2.8rem;
    color: #fff;
    margin: 40px 0 20px 0;
    text-align: center;
  } */
`;
