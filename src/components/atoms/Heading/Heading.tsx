import React, { ReactElement } from 'react';
import {
  StyledHeadingOne,
  StyledHeadingTwo,
  StyledHeadingThree,
  StyledHeadingFour,
} from './Heading.styled';
import { HeadingTypes } from './Heading.types';

export const Heading = ({
  children,
  headingType,
  color,
  centered,
}: HeadingTypes): ReactElement => {
  const HeadingComponent = ({
    headingType,
    color,
    centered,
  }: HeadingTypes): ReactElement => {
    switch (headingType) {
      case 'h2':
        return (
          <StyledHeadingTwo centered={centered} color={color}>
            {children}
          </StyledHeadingTwo>
        );
      case 'h3':
        return (
          <StyledHeadingThree centered={centered} color={color}>
            {children}
          </StyledHeadingThree>
        );
      case 'h4':
        return (
          <StyledHeadingFour centered={centered} color={color}>
            {children}
          </StyledHeadingFour>
        );
      default:
        return (
          <StyledHeadingOne centered={centered} color={color}>
            {children}
          </StyledHeadingOne>
        );
    }
  };
  return (
    <HeadingComponent
      centered={centered}
      color={color}
      headingType={headingType}
    >
      {children}
    </HeadingComponent>
  );
};
