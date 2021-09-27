import React from 'react';
import Heading from '@/atoms/Heading';
import Paragraph from '@/atoms/Paragraph';
import Button from '@/atoms/Button';
import SeoHead from '@/components/SeoHead';
import Nav from '@/molecules/Nav';
import Footer from '@/organisms/Footer';
import Div from '@/atoms/Div';
import RestaurantTile from '@/molecules/RestaurantTile';

const Home = (): JSX.Element => (
  <>
    <SeoHead />
    <Nav />
    <Div>
      <Heading>Div Tytuł</Heading>
    </Div>
    <RestaurantTile picSrc='https://www.restu.pl/ir/restaurant/1cf/1cfdbb74bc356edd1bcc5d31467ec48c--c732xc400.jpg'></RestaurantTile>
    <Heading>Tytuł 1</Heading>
    <Heading headingType='h2'>Tytuł 2</Heading>
    <Heading headingType='h3'>Tytuł 3</Heading>
    <Heading headingType='h4'>Tytuł 4</Heading>
    <Paragraph>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error recusandae
      totam, iure, alias laborum tempore maiores id aut voluptas officiis
      quaerat suscipit. Itaque aperiam quasi magnam perspiciatis quae dicta
      consectetur!
    </Paragraph>
    <Paragraph thick={true}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error recusandae
      totam, iure, alias laborum tempore maiores id aut voluptas officiis
      quaerat suscipit. Itaque aperiam quasi magnam perspiciatis quae dicta
      consectetur!
    </Paragraph>
    <Button>Wciśnij Guzik</Button>
    <Footer>
      <Paragraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
        recusandae totam, iure.
      </Paragraph>
      <Paragraph>Lorem, ipsum dolor.</Paragraph>
    </Footer>
  </>
);

export default Home;
