import React, { ReactElement } from 'react';
import Link from 'next/link';
import { StyledNav } from './Nav.styled';

import ListItem from '@/components/atoms/ListItem';
import { StyledAnchor } from '@/components/atoms/Anchor/Anchor.styled';
import Img from '@/atoms/Img';

export const Nav = (): ReactElement => (
  <StyledNav>
    <ListItem>
      <Link href='/' passHref>
        <StyledAnchor>Strona Główna</StyledAnchor>
      </Link>
    </ListItem>
    <ListItem>
      <Link href='/restauracje' passHref>
        <StyledAnchor>Restauracje</StyledAnchor>
      </Link>
    </ListItem>
    <ListItem>
      <Link href='/restauracje' passHref>
        <StyledAnchor>Restauracje</StyledAnchor>
      </Link>
    </ListItem>
  </StyledNav>
);
