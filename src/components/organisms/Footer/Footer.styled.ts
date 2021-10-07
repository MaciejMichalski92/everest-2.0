import styled from 'styled-components';
import { theme } from '@/theme/theme';

export const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  background-color: ${theme.colors.bdazzledBlue};
  @media ${theme.breakpoints.desktop} {
    flex-direction: row;
  }
`;
