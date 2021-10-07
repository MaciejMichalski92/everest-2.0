import styled from 'styled-components';
import theme from '@/components/theme';

export const StyledRestaurantTileWrapper = styled.div`
  padding: 10px;
  width: fit-content;
  box-shadow: 1px 2px 5px ${theme.colors.palarinatePurple};
  border-radius: 10px;
  transition: 0.3s;
  background-color: ${theme.colors.white};

  :hover {
    box-shadow: 1px 2px 5px ${theme.colors.cyberGrape};
  }

  p {
    margin: 20px 0;
  }

  div {
    :last-of-type {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  button {
    align-self: flex-end;
  }
`;

export const StyledRestaurantTile = styled.div`
  position: relative;
  width: 230px;
  height: 200px;
  cursor: pointer;
  overflow: hidden;
  border: 2px solid ${theme.colors.black};

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    transition: 0.3s;
  }

  :hover::after {
    opacity: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s;
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
    transition: 0.3s;
    z-index: 2;

    ::after {
      content: '';
      position: absolute;
      bottom: -7px;
      left: -7px;
      right: 7px;
      display: inline-block;
      width: 100%;
      height: 100%;
      border: 2px solid ${theme.colors.amaranthMP};
    }
  }
`;
