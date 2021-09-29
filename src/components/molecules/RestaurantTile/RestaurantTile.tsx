import React, { ReactElement } from 'react';
import { RestaurantTileTypes } from './RestaurantTile.types';
import {
  StyledRestaurantTile,
  StyledRestaurantTileWrapper,
} from './RestaurantTile.styled';
import Div from '@/atoms/Div';
import Img from '@/atoms/Img';
import Heading from '@/atoms/Heading';
import Paragraph from '@/atoms/Paragraph';
import Button from '@/atoms/Button';
import Link from 'next/link';

export const RestaurantTile = ({
  picSrc,
  restaurantType,
  title,
  restaurantMaxSpace,
  link,
}: RestaurantTileTypes): ReactElement => {
  const handleReservationPopup = () => {
    console.log('hello');
  };

  return (
    <StyledRestaurantTileWrapper>
      <Link href={link}>
        <StyledRestaurantTile>
          <Img picture={false} src={picSrc} />
          <Div>
            <Heading headingType='h4'>{title}</Heading>
          </Div>
        </StyledRestaurantTile>
      </Link>
      <Div>
        <span>
          <Paragraph>{restaurantType}</Paragraph>
          <Paragraph small>max. {restaurantMaxSpace} osób</Paragraph>
        </span>
        <Button secondary onClick={handleReservationPopup}>
          Zarezerwuj
        </Button>
      </Div>
    </StyledRestaurantTileWrapper>
  );
};
