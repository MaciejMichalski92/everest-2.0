import React, { ReactElement } from 'react';
import { SecondHeaderTypes } from './SecondHeader.types';
import { StyledSecondHeader } from './SecondHeader.styled';

export const SecondHeader = ({ children }: SecondHeaderTypes): ReactElement => (
  <StyledSecondHeader>{children}</StyledSecondHeader>
);
