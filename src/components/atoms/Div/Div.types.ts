import { ReactNode } from 'react';

export interface DivTypes {
  children: ReactNode;
  width?: string;
  height?: string;
  bgc?: { desktop: string; mobile: string };
}

export interface StyledDivProps {
  width?: string;
  height?: string;
  bgc?: { desktop: string; mobile: string };
}
