import theme from '@/components/theme';
import styled, { css } from 'styled-components';
import { StyledTopRestaurantsProps } from './TopRestaurants.types';

export const StyledTopRestaurants = styled.div<StyledTopRestaurantsProps>`
  width: 90%;
  margin: 50px auto;
  padding: 10px;
  border: 2px solid ${theme.colors.bdazzledBlue};
  border-radius: 10px;
  box-shadow: 0 0 5px 1px ${theme.colors.bdazzledBlue};

  ${({ background }) =>
    background &&
    css`
      position: relative;
      background-image: url('${background}');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    `}

  @media ${theme.breakpoints.laptop} {
    width: 85%;
    padding: 20px;
  }

  @media ${theme.breakpoints.smallDesktop} {
    width: 65%;
    padding: 20px;
  }
`;

export const StyledTopRestaurantsDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0;
  overflow-x: scroll;

  div {
    margin: 5px;
  }
`;
