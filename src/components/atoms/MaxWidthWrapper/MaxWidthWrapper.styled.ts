import styled, { css } from 'styled-components';
import { StyledMaxWidthWrapperProps } from './MaxWidthWrapper.types';

export const StyledMaxWidthWrapper = styled.div<StyledMaxWidthWrapperProps>`
  max-width: 991px;
  margin: 0 auto;

  ${({ isCenter }) =>
    isCenter &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
`;
