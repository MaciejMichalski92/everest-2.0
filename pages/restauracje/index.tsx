import React from 'react';
import SeoHead from '@/components/SeoHead';
import Heading from '@/atoms/Heading';
import RestaurantTile from '@/molecules/RestaurantTile';
import GridWrapper from '@/molecules/GridWrapper';

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const Home = (): JSX.Element => (
  <>
    <SeoHead title='Restauracje' />
    <Heading headingType='h4'>Restauracje</Heading>
    <GridWrapper>
      {array.map((element, id) => (
        <RestaurantTile
          key={id}
          link='#'
          restaurantMaxSpace={400}
          title='Nolita'
          restaurantType='fine-dining'
          picSrc='https://www.restu.pl/ir/restaurant/1cf/1cfdbb74bc356edd1bcc5d31467ec48c--c732xc400.jpg'
        ></RestaurantTile>
      ))}
    </GridWrapper>
  </>
);

export default Home;
