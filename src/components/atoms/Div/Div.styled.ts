import styled from 'styled-components';
import { StyledDivProps } from './Div.types';

export const StyledDiv = styled.div<StyledDivProps>`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : 'auto')};
`;
