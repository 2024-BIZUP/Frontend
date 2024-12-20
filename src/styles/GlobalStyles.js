import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 100;
    src: url('/fonts/NotoSansKR-Thin.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 200;
    src: url('/fonts/NotoSansKR-ExtraLight.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 300;
    src: url('/fonts/NotoSansKR-Light.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 400;
    src: url('/fonts/NotoSansKR-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 500;
    src: url('/fonts/NotoSansKR-Medium.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 600;
    src: url('/fonts/NotoSansKR-SemiBold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 700;
    src: url('/fonts/NotoSansKR-Bold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 800;
    src: url('/fonts/NotoSansKR-ExtraBold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 900;
    src: url('/fonts/NotoSansKR-Black.ttf') format('truetype');
  }


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