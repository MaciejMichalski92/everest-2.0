import theme from '@/components/theme';
import styled from 'styled-components';

export const StyledNav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 0;

  li {
    position: relative;
    margin-right: 10px;
    list-style: none;
    cursor: pointer;
    transition: 0.3s;
    padding: 5px;

    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      display: inline-block;
      width: 100%;
      height: 2px;
      background-color: ${theme.colors.cgBlue};
      transition: 0.3s;
    }

    :hover::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      display: inline-block;
      width: 100%;
      height: 2px;
      background-color: ${theme.colors.palarinatePurple};
    }
  }

  a {
    color: ${theme.colors.cgBlue};
    font-weight: bold;
    text-decoration: none;

    :active {
      color: ${theme.colors.sapphireBlue};
    }
  }
`;
