import styled from 'styled-components';

export const StyledButton = styled.button`
  position: relative;
  padding: 10px 20px;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.jazzberyJam};
  box-shadow: 0px 2px 5px 1px ${(props) => props.theme.colors.amaranthMP};
  transition: 0.2s;
  overflow: hidden;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 100%;
    transform: skewX(135deg);
    width: 0;
    height: 100%;
    background-color: ${(props) => props.theme.colors.sapphireBlue};
    opacity: 0.2;
    transition: 0.3s;
  }
  &::after {
    left: 0;
    width: 0;
    height: 0;
    transform: skewX(-45deg);
  }
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.amaranthPurple};
    &::before {
      left: 93%;
      width: 25%;
    }
    &::after {
      left: -15%;
      height: 100%;
      width: 25%;
    }
  }
  &:active {
    background-color: ${(props) => props.theme.colors.blueMunsell};
  }
`;
