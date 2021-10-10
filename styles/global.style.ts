import { createGlobalStyle } from 'styled-components';
import theme from '@/components/theme';

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
	background-color: ${theme.colors.lightBlue};
}

::-webkit-scrollbar {
  width: 15px;
  height: 15px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px ${theme.colors.lightBlue}; 
  border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
  background: ${theme.colors.lightGrey}; 
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: ${theme.colors.lightBlue}; 
}
`;
