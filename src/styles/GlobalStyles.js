import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;  
  }

    button {
    cursor: pointer;
  }
    html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

`;