import React, { ReactElement } from 'react';
import { GridWrapperTypes } from './GridWrapper.types';
import { StyledGridWrapper } from './GridWrapper.styled';

export const GridWrapper = ({ children }: GridWrapperTypes): ReactElement => (
  <StyledGridWrapper>{children}</StyledGridWrapper>
);
