import styled, { css } from 'styled-components';
import { StyledParagraphTypes } from './Paragraph.types';

export const StyledParagraph = styled.p<StyledParagraphTypes>`
  font-size: 1.2rem;
  font-weight: normal;

  ${({ small }) =>
    small &&
    css`
      font-size: 0.8rem;
    `}
`;
export const StyledThickParagraph = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;
