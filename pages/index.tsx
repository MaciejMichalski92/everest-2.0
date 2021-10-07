import React from 'react';
import SeoHead from '@/components/SeoHead';
import SearchComponent from '@/molecules/SearchComponent';
import TopRestaurants from '@/molecules/TopRestaurants';

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
      <TopRestaurants arrayOfRestaurants={arrayOfRestaurants} />
    </>
  );
};

export default Home;
