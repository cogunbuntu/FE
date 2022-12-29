import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: 'NeoDunggeunmo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.3/NeoDunggeunmo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
* {
  font-family: Pretendard Variable, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  margin: 0;
  padding: 0;
  font: inherit;
  color: inherit;
}
*, :after, :before, ::before, ::after {
  box-sizing: border-box;
}
:root {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  overflow-wrap: break-word;
  word-break: break-word;
  
}
html, body, #__next {
  height: 100%;
}
body{
  background-color: #FFFCF5;
}
img, picture, video, svg, canvas {
  display: block;
  max-width: 100%;
}
button,
[role='button'] {
  border: 0;
  border-radius: 0;
  background: none;
  user-select: none;
  cursor: pointer;
}
ul, ol {
  list-style: none;
}
a {
  text-decoration: none;
  cursor: pointer;
}
input, img, fieldset, iframe {
  border: 0;
}
address, em, i {
  font-style: normal;
}
:focus {
  outline: none;
}
mark{
  background-color: #FFFFFF;
}
`;

export default GlobalStyle;
