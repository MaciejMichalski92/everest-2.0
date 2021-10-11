import React, { ReactElement } from 'react';
import { MenuTypes } from './Menu.types';
import { StyledMenu } from './Menu.styled';
import Paragraph from '@/atoms/Paragraph';

export const Menu = ({ courses, price }: MenuTypes): ReactElement => (
  <StyledMenu>
    <Paragraph thick>{price} zł</Paragraph>
    {courses.map((course, index) => (
      <Paragraph key={`${course}${index}`}>{course.dish}</Paragraph>
    ))}
  </StyledMenu>
);
