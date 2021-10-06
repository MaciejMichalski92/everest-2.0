import React from 'react';
import Heading from '@/atoms/Heading';
import Paragraph from '@/atoms/Paragraph';
import Button from '@/atoms/Button';
import SeoHead from '@/components/SeoHead';
import SearchComponent from '@/molecules/SearchComponent';

const Home = (): JSX.Element => (
  <>
    <SeoHead />
    <SearchComponent />
    <Paragraph>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error recusandae
      totam
    </Paragraph>
    <Paragraph thick={true}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error recusandae
      totam
    </Paragraph>
    <Button>Wciśnij Guzik</Button>
  </>
);

export default Home;
