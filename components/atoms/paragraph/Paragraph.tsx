import React, { ReactElement } from 'react';
import { ParagraphTypes } from './Paragraph.types';
import { StyledParagraph } from './Paragraph.styled';

export const Paragraph = ({ children }: ParagraphTypes): ReactElement => (
  <StyledParagraph>{children}</StyledParagraph>
);
