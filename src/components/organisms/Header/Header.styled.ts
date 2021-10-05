import theme from '@/components/theme';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: rgba(255, 255, 255, 0.8);

  div {
    @media ${theme.breakpoints.tablet} {
      width: 300px;
    }
  }

  div img {
    width: 100%;
  }
`;
