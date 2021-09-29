import { ReactNode } from 'react';

export interface ButtonTypes {
  children: ReactNode;
  secondary?: boolean;
  onClick?: (arr?: any) => void;
}

export interface StyledButtonProps {
  secondary?: boolean;
}
