import React, { ReactElement } from 'react';
import Link from 'next/link';
import { StyledNav } from './Nav.styled';

import ListItem from '@/components/atoms/ListItem';
import Anchor from '@/components/atoms/Anchor';

export const Nav = (): ReactElement => (
  <StyledNav>
    <ListItem>
      <Link href='/' passHref>
        <Anchor>Strona Główna</Anchor>
      </Link>
    </ListItem>
    <ListItem>
      <Link href='/blog'>
        <Anchor>Aktualności</Anchor>
      </Link>
    </ListItem>
  </StyledNav>
);
