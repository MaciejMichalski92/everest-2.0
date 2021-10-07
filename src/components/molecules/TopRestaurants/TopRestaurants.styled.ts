import theme from '@/components/theme';
import styled from 'styled-components';

export const StyledTopRestaurants = styled.div`
  width: 100%;
  padding: 10px;
  background-color: ${theme.colors.bdazzledBlue};
`;
export const StyledTopRestaurantsDiv = styled.div`
  display: flex;
  padding: 20px;
  overflow-x: scroll;

  div {
    margin: 5px;
  }
`;
