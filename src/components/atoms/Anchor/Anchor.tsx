import React, { ReactElement } from 'react';
import { AnchorTypes } from './Anchor.types';
import { StyledAnchor } from './Anchor.styled';

export const Anchor = ({ children }: AnchorTypes): ReactElement => (
  <StyledAnchor>{children}</StyledAnchor>
);
