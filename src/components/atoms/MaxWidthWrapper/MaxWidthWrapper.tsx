import React, { ReactElement } from 'react';
import { MaxWidthWrapperTypes } from './MaxWidthWrapper.types';
import { StyledMaxWidthWrapper } from './MaxWidthWrapper.styled';

export const MaxWidthWrapper = ({
  children,
  isCenter,
}: MaxWidthWrapperTypes): ReactElement => (
  <StyledMaxWidthWrapper isCenter={isCenter ? isCenter : false}>
    {children}
  </StyledMaxWidthWrapper>
);
