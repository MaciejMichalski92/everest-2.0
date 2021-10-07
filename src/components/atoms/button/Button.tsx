import React, { ReactElement } from 'react';
import { StyledButton } from './Button.styled';
import { ButtonTypes } from './Button.types';

export const Button = ({
  children,
  secondary,
  borderRadius,
  onClick,
}: ButtonTypes): ReactElement => (
  <StyledButton
    borderRadius={borderRadius}
    onClick={onClick}
    secondary={secondary}
  >
    {children}
  </StyledButton>
);
