import React, { ReactElement } from 'react';
import { RestaurantTileTypes } from './RestaurantTile.types';
import { StyledRestaurantTile } from './RestaurantTile.styled';
import Div from '@/atoms/Div';
import Img from '@/atoms/Img';
import Heading from '@/atoms/Heading';

export const RestaurantTile = ({
  picSrc,
}: RestaurantTileTypes): ReactElement => {
  return (
    <StyledRestaurantTile>
      <Img picture={false} src={picSrc} />
      <Div>
        <Heading headingType='h4'>Tytuł 4</Heading>
      </Div>
    </StyledRestaurantTile>
  );
};
