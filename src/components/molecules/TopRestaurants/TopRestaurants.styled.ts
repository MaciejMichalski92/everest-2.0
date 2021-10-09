import theme from '@/components/theme';
import styled from 'styled-components';

export const StyledTopRestaurants = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto 50px;
  padding: 10px;
  background-color: ${theme.colors.bdazzledBlue};

  @media ${theme.breakpoints.laptop} {
    width: 55%;
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
