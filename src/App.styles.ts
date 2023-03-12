import styled, { createGlobalStyle } from 'styled-components';
import Bgimg from './images/puzzlepiece.jpg';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing:border-box;
  font-family: 'Shantell Sans', cursive;
}

html {
  height: 100%;
}

body {
  background-image: url(${Bgimg});
  background-size: cover;
  margin:0;
  padding 0 10px;
  display: flex;
  justify-content: center;
}
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Fascinate Inline;
    font-size: 60px;
    display:flex;
    flex-direction:column;
    background: linear-gradient(180deg, #fff, #87f1ff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    text-align: center;
    margin: 20px;

    > span {
      font-family: 'Chakra Petch', sans-serif;
      text-transform: uppercase;
      font-size: 50px;
      font-weight: 800
    }
  }

  .start, .next {
    color: black;
    font-size: 15px;
    cursor: pointer;
    background: #A3C1AD;
    border: 2px solid transparent;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
