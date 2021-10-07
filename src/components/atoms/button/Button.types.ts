import { ReactNode } from 'react';

export interface ButtonTypes {
  children: ReactNode;
  secondary?: boolean;
  borderRadius?: number;
  onClick?: (arr?: any) => void;
}

export interface StyledButtonProps {
  secondary?: boolean;
  borderRadius?: number;
}
