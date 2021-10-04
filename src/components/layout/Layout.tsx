import React, { ReactElement } from 'react';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';
import { LayoutTypes } from './Layout.types';

export const Layout = ({ children }: LayoutTypes): ReactElement => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
