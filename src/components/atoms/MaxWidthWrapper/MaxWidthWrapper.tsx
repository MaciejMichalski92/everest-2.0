import React, { ReactElement } from 'react';
import { MaxWidthWrapperTypes } from './MaxWidthWrapper.types';
import { StyledMaxWidthWrapper } from './MaxWidthWrapper.styled';

export const MaxWidthWrapper = ({
  children,
}: MaxWidthWrapperTypes): ReactElement => (
  <StyledMaxWidthWrapper>{children}</StyledMaxWidthWrapper>
);
