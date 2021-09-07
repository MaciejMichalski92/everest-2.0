import React, { ReactElement, ReactNode } from 'react';
import { StyledButton } from './Button.styled';
import { ButtonTypes } from './Button.types';

export const Button = ({ children }: ButtonTypes): ReactElement => (
  <StyledButton>{children}</StyledButton>
);
