import theme from '@/components/theme';
import styled, { css } from 'styled-components';
import { StyledDivProps } from './Div.types';

export const StyledDiv = styled.div<StyledDivProps>`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : 'auto')};
  ${({ bgc }) =>
    bgc &&
    css`
      position: relative;
      background-image: url('${bgc.mobile}');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      @media ${theme.breakpoints.laptop} {
        background-image: url('${bgc.desktop}');
      }
    `}
`;
