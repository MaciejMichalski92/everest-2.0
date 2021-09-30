import React from 'react';
import Heading from '@/atoms/Heading';
import Paragraph from '@/atoms/Paragraph';
import Button from '@/atoms/Button';
import SeoHead from '@/components/SeoHead';
import Nav from '@/molecules/Nav';
import Footer from '@/organisms/Footer';

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
      totam
    </Paragraph>
    <Paragraph thick={true}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error recusandae
      totam
    </Paragraph>
    <Button>Wciśnij Guzik</Button>
    <Footer />
  </>
);

export default Home;
