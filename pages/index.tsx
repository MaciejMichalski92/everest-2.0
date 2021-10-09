import React from 'react';
import SeoHead from '@/components/SeoHead';
import SearchComponent from '@/molecules/SearchComponent';
import TopRestaurants from '@/molecules/TopRestaurants';
import Heading from '@/atoms/Heading';
import theme from '@/components/theme';

const Home = (): JSX.Element => {
  const arrayOfRestaurants = [
    {
      title: 'Nolita',
      restaurantMaxSpace: '400',
      imageSrc:
        'https://www.restu.pl/ir/restaurant/1cf/1cfdbb74bc356edd1bcc5d31467ec48c--c732xc400.jpg',
      restaurantType: 'fine-dining',
      link: '#',
    },
    {
      title: 'Nolita',
      restaurantMaxSpace: '400',
      imageSrc:
        'https://www.restu.pl/ir/restaurant/1cf/1cfdbb74bc356edd1bcc5d31467ec48c--c732xc400.jpg',
      restaurantType: 'fine-dining',
      link: '#',
    },
    {
      title: 'Nolita',
      restaurantMaxSpace: '400',
      imageSrc:
        'https://www.restu.pl/ir/restaurant/1cf/1cfdbb74bc356edd1bcc5d31467ec48c--c732xc400.jpg',
      restaurantType: 'fine-dining',
      link: '#',
    },
    {
      title: 'Nolita',
      restaurantMaxSpace: '400',
      imageSrc:
        'https://www.restu.pl/ir/restaurant/1cf/1cfdbb74bc356edd1bcc5d31467ec48c--c732xc400.jpg',
      restaurantType: 'fine-dining',
      link: '#',
    },
    {
      title: 'Nolita',
      restaurantMaxSpace: '400',
      imageSrc:
        'https://www.restu.pl/ir/restaurant/1cf/1cfdbb74bc356edd1bcc5d31467ec48c--c732xc400.jpg',
      restaurantType: 'fine-dining',
      link: '#',
    },
  ];
  return (
    <>
      <SeoHead />
      <SearchComponent />
      <Heading centered color={theme.colors.sapphireBlue} headingType='h2'>
        Top 5 w Warszawie:
      </Heading>
      <TopRestaurants arrayOfRestaurants={arrayOfRestaurants} />
      <Heading centered color={theme.colors.sapphireBlue} headingType='h2'>
        Kuchnia Polska:
      </Heading>
      <TopRestaurants arrayOfRestaurants={arrayOfRestaurants} />
      <Heading centered color={theme.colors.sapphireBlue} headingType='h2'>
        Fine-dining:
      </Heading>
      <TopRestaurants arrayOfRestaurants={arrayOfRestaurants} />
    </>
  );
};

export default Home;
