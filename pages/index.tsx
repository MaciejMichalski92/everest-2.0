import React from 'react';
import SeoHead from '@/components/SeoHead';
import SearchComponent from '@/molecules/SearchComponent';
import TopRestaurants from '@/molecules/TopRestaurants';
import Div from '@/atoms/Div';

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
  const bgcArray = {
    desktop: './searcher-bgc.jpg',
    mobile: './searcher-bgc-mobile.jpg',
  };
  return (
    <>
      <SeoHead />
      <Div bgc={bgcArray} height='460px'>
        <SearchComponent />
      </Div>
      <TopRestaurants title='Top 5' arrayOfRestaurants={arrayOfRestaurants} />
      <TopRestaurants
        title='Nasze rekomendacje'
        arrayOfRestaurants={arrayOfRestaurants}
      />
    </>
  );
};

export default Home;
