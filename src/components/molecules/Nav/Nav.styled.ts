import theme from '@/components/theme';
import styled from 'styled-components';

export const StyledNav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 0;

  li {
    margin-right: 10px;
    list-style: none;
  }

  li img {
    width: 30px;
  }

  a {
    color: ${theme.colors.cgBlue};
    font-weight: bold;
    text-decoration: none;
  }
`;
