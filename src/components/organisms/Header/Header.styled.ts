import theme from '@/components/theme';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  div {
    @media ${theme.breakpoints.tablet} {
      width: 300px;
    }
  }

  div img {
    width: 100%;
  }
`;
