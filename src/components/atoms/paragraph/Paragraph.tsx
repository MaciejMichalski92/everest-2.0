import React, { ReactElement } from 'react';
import { StyledParagraph, StyledThickParagraph } from './Paragraph.styled';
import { ParagraphTypes } from './Paragraph.types';

export const Paragraph = ({
  children,
  thick,
}: ParagraphTypes): ReactElement => (
  <>
    {thick ? (
      <StyledThickParagraph>{children}</StyledThickParagraph>
    ) : (
      <StyledParagraph>{children}</StyledParagraph>
    )}
  </>
);
