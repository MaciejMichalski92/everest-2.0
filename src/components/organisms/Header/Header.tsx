import React, { ReactElement } from 'react';
import { HeaderTypes } from './Header.types';
import { StyledHeader } from './Header.styled';
import Nav from '@/molecules/Nav';
import Img from '@/atoms/Img';
import Div from '@/atoms/Div';
import Link from 'next/link';

export const Header = ({ children }: HeaderTypes): ReactElement => {
  return (
    <StyledHeader>
      <Div width='200px'>
        <Link href='/' passHref>
          <a>
            <Img picture={false} src='./eve-rest-logo.png' />
          </a>
        </Link>
      </Div>
      <Nav />
    </StyledHeader>
  );
};
