import React, { ReactElement } from 'react';
import { TopRestaurantsTypes } from './TopRestaurants.types';
import {
  StyledTopRestaurants,
  StyledTopRestaurantsDiv,
} from './TopRestaurants.styled';
import Heading from '@/atoms/Heading';
import RestaurantTile from '@/molecules/RestaurantTile';
import MaxWidthWrapper from '@/atoms/MaxWidthWrapper';

export const TopRestaurants = ({
  arrayOfRestaurants,
}: TopRestaurantsTypes): ReactElement => (
  <StyledTopRestaurants>
    <MaxWidthWrapper isCenter>
      <Heading headingType='h3'>Najpopularniejsze Restauracje</Heading>
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
    </MaxWidthWrapper>
  </StyledTopRestaurants>
);
