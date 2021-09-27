import styled from 'styled-components';
import theme from '@/components/theme';

export const StyledRestaurantTile = styled.div`
  position: relative;
  width: 200px;
  height: 260px;
  cursor: pointer;
  overflow: hidden;
  border: 2px solid ${theme.colors.amaranthMP};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s;

    @media ${theme.breakpoints.laptop} {
      height: 250px;
    }
  }

  :hover img {
    transform: scale(1.05);
  }

  div {
    width: auto;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    padding: 0 10px;
    background-color: ${theme.colors.whiteOpacity};
  }
`;
