import React from 'react';
import Heading from '@/atoms/Heading';
import Paragraph from '@/components/atoms/Paragraph';
import Button from '@/components/atoms/Button';
import SeoHead from '@/components/SeoHead';
import Nav from '@/components/molecules/Nav';
import Footer from '@/organisms/Footer';
import Div from '@/components/molecules/Div';

const Home = (): JSX.Element => (
  <>
    <SeoHead />
    <Nav />
    <Heading>Tytuł 1</Heading>
    <Heading headingType='h2'>Tytuł 2</Heading>
    <Heading headingType='h3'>Tytuł 3</Heading>
    <Heading headingType='h4'>Tytuł 4</Heading>
    <Div>
      <Heading>Div Tytuł</Heading>
    </Div>
    <Div width={'500px'} height={'200px'}>
      <Heading>Div Tytuł</Heading>
    </Div>
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
