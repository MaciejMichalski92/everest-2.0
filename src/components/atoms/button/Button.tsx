import React, { ReactElement } from 'react';
import { StyledButton } from './Button.styled';
import { ButtonTypes } from './Button.types';

export const Button = ({
  children,
  secondary,
  borderRadius,
  noStyles,
  onClick,
}: ButtonTypes): ReactElement =>
  noStyles ? (
    <button>{children}</button>
  ) : (
    <StyledButton
      borderRadius={borderRadius}
      onClick={onClick}
      secondary={secondary}
    >
      {children}
    </StyledButton>
  );
