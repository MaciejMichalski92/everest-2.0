import React, { ReactElement } from 'react';
import { StyledFooter } from '@/organisms/Footer/Footer.styled';
import { FooterTypes } from '@/organisms/Footer/Footer.types';

export const Footer = ({ children }: FooterTypes): ReactElement => (
  <StyledFooter>{children}</StyledFooter>
);
