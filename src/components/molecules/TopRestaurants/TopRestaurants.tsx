import React, { ReactElement } from 'react';
import { TopRestaurantsTypes } from './TopRestaurants.types';
import {
  StyledTopRestaurants,
  StyledTopRestaurantsDiv,
} from './TopRestaurants.styled';
import Heading from '@/atoms/Heading';
import RestaurantTile from '@/molecules/RestaurantTile';

export const TopRestaurants = ({
  arrayOfRestaurants,
}: TopRestaurantsTypes): ReactElement => (
  <StyledTopRestaurants>
    <Heading color='#fff' headingType='h4'>
      Popularne:
    </Heading>
    <StyledTopRestaurantsDiv>
      {arrayOfRestaurants.map(
        (
          { title, restaurantMaxSpace, imageSrc, restaurantType, link },
          index
        ) => (
          <RestaurantTile
            key={title + index}
            link={link}
            restaurantMaxSpace={restaurantMaxSpace}
            title={title}
            restaurantType={restaurantType}
            picSrc={imageSrc}
          />
        )
      )}
    </StyledTopRestaurantsDiv>
  </StyledTopRestaurants>
);
