import React, { ReactElement } from 'react';
import { StyledButton } from './Button.styled';
import { ButtonTypes } from './Button.types';

export const Button = ({
  children,
  secondary,
  onClick,
}: ButtonTypes): ReactElement => (
  <StyledButton onClick={onClick} secondary={secondary}>
    {children}
  </StyledButton>
);
