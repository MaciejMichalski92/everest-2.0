import React, { ReactElement } from 'react';
import { TopRestaurantsTypes } from './TopRestaurants.types';
import {
  StyledTopRestaurants,
  StyledTopRestaurantsDiv,
} from './TopRestaurants.styled';
import RestaurantTile from '@/molecules/RestaurantTile';
import theme from '@/components/theme';
import Heading from '@/atoms/Heading';

export const TopRestaurants = ({
  arrayOfRestaurants,
  background,
  title,
}: TopRestaurantsTypes): ReactElement => (
  <StyledTopRestaurants background={background}>
    <Heading color={theme.colors.darkGrey} headingType='h2'>
      {title}
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
