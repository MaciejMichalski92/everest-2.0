import React from 'react';
import Heading from '@/atoms/Heading';
import Paragraph from '@/atoms/Paragraph';
import Button from '@/atoms/Button';
import SeoHead from '@/components/SeoHead';

const Home = (): JSX.Element => (
  <>
    <SeoHead title='Artykuły' />
    <Heading>HA 5</Heading>
    <Heading headingType='h2'>HA 5</Heading>
    <Heading headingType='h3'>HA 5</Heading>
    <Heading headingType='h4'>HA 5</Heading>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aliquam
      neque distinctio similique architecto. Dicta, saepe sint aliquam aliquid
      distinctio id, quam illo iste voluptas ipsa labore aspernatur? Numquam,
      debitis!
    </Paragraph>
    <Button>Wciśnij Guzik</Button>
  </>
);

export default Home;
