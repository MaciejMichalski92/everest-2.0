import styled from 'styled-components';
import theme from '@/components/theme';

export const StyledFlexColumns = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media ${theme.breakpoints.tablet} {
    flex-direction: row;
  }
`;

export const Column = styled.div`
  padding: 10px;
`;
