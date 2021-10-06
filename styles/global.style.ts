import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
	margin: 0;
	padding: 0;
	box-sizing: content-box;
}

html{
  --scroll-behavior: smooth;
  scroll-behavior: smooth;
}


body{
	font-family: 'Oswald',sans-serif;
}
`;
