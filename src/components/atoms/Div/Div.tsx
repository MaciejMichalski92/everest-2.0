import React, { ReactElement } from 'react';
import { StyledDiv } from './Div.styled';
import { DivTypes } from './Div.types';

export const Div = ({ children, width, height }: DivTypes): ReactElement => {
  return (
    <StyledDiv width={width} height={height}>
      {children}
    </StyledDiv>
  );
};
