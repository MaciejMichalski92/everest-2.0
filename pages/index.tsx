import React from 'react';
import Heading from '@/components/atoms/Heading';
import Paragraph from '@/components/atoms/paragraph';
import Button from '@/components/atoms/button';
import SeoHead from '@/components/SeoHead';
import Nav from '@/components/molecules/Nav';

const Home = (): JSX.Element => (
  <>
    <SeoHead />
    <Nav />
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
    <Button>Wciśnij Guzik</Button>
  </>
);

export default Home;
