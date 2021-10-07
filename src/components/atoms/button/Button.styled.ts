import styled, { css } from 'styled-components';
import { StyledButtonProps } from './Button.types';

export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  padding: 10px 20px;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.amaranthPurple};
  box-shadow: 0px 2px 5px 1px ${({ theme }) => theme.colors.amaranthMP};
  transition: 0.2s;
  overflow: hidden;

  ${({ secondary }) =>
    secondary &&
    css`
      font-size: 0.9rem;
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.amaranthMP};
      box-shadow: 0px 2px 5px 1px
        ${({ theme }) => theme.colors.palarinatePurple};
    `};

  ${({ borderRadius }) =>
    borderRadius &&
    css`
      border-radius: ${borderRadius}%;
    `};

  ::before,
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 100%;
    transform: skewX(135deg);
    width: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 0.2;
    transition: 0.2s;
  }

  ::after {
    left: 0;
    width: 0;
    height: 0;
    transform: skewX(-45deg);
  }

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.amaranthPurple};

    ${({ secondary }) =>
      secondary &&
      css`
        color: ${({ theme }) => theme.colors.white};
      `};

    ::before {
      left: 93%;
      width: 25%;
    }

    ::after {
      left: -15%;
      height: 100%;
      width: 25%;
    }
  }

  :active {
    background-color: ${({ theme }) => theme.colors.palarinatePurple};
  }
`;
