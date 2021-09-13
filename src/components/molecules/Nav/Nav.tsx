import React, { ReactElement } from 'react';
import Link from 'next/link';
import { StyledNav } from './Nav.styled';

import ListItem from '@/components/atoms/ListItem';
import { StyledAnchor } from '@/components/atoms/Anchor/Anchor.styled';

export const Nav = (): ReactElement => (
  <StyledNav>
    <ListItem>
      <Link href='/' passHref>
        <StyledAnchor>Strona Główna</StyledAnchor>
      </Link>
    </ListItem>
    <ListItem>
      <Link href='/blog' passHref>
        <StyledAnchor>Aktualności</StyledAnchor>
      </Link>
    </ListItem>
  </StyledNav>
);
