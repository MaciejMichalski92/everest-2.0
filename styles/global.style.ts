import { createGlobalStyle } from 'styled-components';
import { theme } from '@/theme/theme';

export const GlobalStyle = createGlobalStyle`

*{
	margin: 0;
	padding: 0;
	box-sizing:content-box;
}

html{
  --scroll-behavior: smooth;
  scroll-behavior: smooth;
}


body{
	position: relative;
	min-height: 100vh;
	font-family: 'Oswald',sans-serif;
	background-image: url('brick-wall-g6a04784a6_1920.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	color: ${theme.colors.white};

	::before {
		content: '';
		display: inline-block;
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.6);
		z-index: -1;
	}
}
`;
