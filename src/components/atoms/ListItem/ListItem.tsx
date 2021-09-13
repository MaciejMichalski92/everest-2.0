import React, { ReactElement } from 'react';
import { ListItemTypes } from './ListItem.types';
import { StyledListItem } from './ListItem.styled';

export const ListItem = ({ children }: ListItemTypes): ReactElement => (
  <StyledListItem>{children}</StyledListItem>
);
