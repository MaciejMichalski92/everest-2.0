import React, { ReactElement } from 'react';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import { LayoutTypes } from './Layout.types';
import { StyledLayout } from './Layout.styled';

export const Layout = ({ children }: LayoutTypes): ReactElement => (
  <StyledLayout>
    <Header />
    <main>{children}</main>
    <Footer />
  </StyledLayout>
);
