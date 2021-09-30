import React, { ReactElement } from 'react';
import { StyledFooter } from './Footer.styled';
import Paragraph from '@/atoms/Paragraph';
import FlexColumns from '@/organisms/FlexColumns';

export const Footer = (): ReactElement => (
  <StyledFooter>
    <FlexColumns
      columnNumber={4}
      first={
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nisi,
          repudiandae, fugiat architecto libero est possimus incidunt iure,
          deserunt id nam sapiente molestias accusantium quo totam perspiciatis?
          Assumenda, enim non.
        </Paragraph>
      }
      second={
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nisi,
          repudiandae, fugiat architecto libero est possimus incidunt iure,
          deserunt id nam sapiente molestias accusantium quo totam perspiciatis?
          Assumenda, enim non.
        </Paragraph>
      }
      third={
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nisi,
          repudiandae, fugiat architecto libero est possimus incidunt iure,
          deserunt id nam sapiente molestias accusantium quo totam perspiciatis?
          Assumenda, enim non.
        </Paragraph>
      }
    ></FlexColumns>
  </StyledFooter>
);
