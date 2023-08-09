import styled, { createGlobalStyle } from "styled-components";
import Bgimg from "./images/puzzlepiece.jpg";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing:border-box;
}

html {
  height: 100%;
}

body {
  // background-image: url(${Bgimg});
  // background-size: cover;
  // margin:0;
  padding 0 10px;
  display: flex;
  justify-content: center;
    align-items: center;

}
`;
export const Wrapper = styled.div`
  width: 70vw;
  max-width: 90vw;
  height: 90vh;
  background-color: black;
  margin: 3px;
  border: 3px solid blue;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 1rem;
    margin: 0;
  }

  h1 {
    font-family: "Gilroy-Bold", sans-serif;
    font-size: 25px;
    display: flex;
    flex-direction: column;
    color: #fff;
    font-weight: 300;
    background-size: 100%;
    background-clip: text;

    filter: drop-shadow(2px 2px #0085a3);
    text-align: center;
    margin: 20px;

    > span {
      font-family: "Gilroy-Bold", sans-serif;
      text-transform: uppercase;
      font-size: 40px;
      font-weight: 600;
    }
  }

  .start,
  .next {
    color: black;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
    background: #a3c1ad;
    border: 2px solid transparent;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 5px 40px;
  }

  .next {
    margin-bottom: 1rem;
  }

  .start {
    max-width: 200px;
  }
`;
