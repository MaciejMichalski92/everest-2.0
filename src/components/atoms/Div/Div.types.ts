import { ReactNode } from 'react';

export interface DivTypes {
  children: ReactNode;
  width?: string;
  height?: string;
  isCentered?: { align: string; justify: string };
  bgc?: { desktop: string; mobile: string };
}

export interface StyledDivProps {
  isCentered?: { align: string; justify: string };
  width?: string;
  height?: string;
  bgc?: { desktop: string; mobile: string };
}
