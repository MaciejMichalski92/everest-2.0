import React, { ReactElement } from 'react';
import { ListItemTypes } from './ListItem.types';
import { StyledListItem } from './ListItem.styled';

import Anchor from '@/atoms/Anchor';

export const ListItem = ({ children }: ListItemTypes): ReactElement => (
  <StyledListItem>
    <Anchor>{children}</Anchor>
  </StyledListItem>
);
