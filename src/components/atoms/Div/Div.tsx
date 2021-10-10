import React, { ReactElement } from 'react';
import { StyledDiv } from './Div.styled';
import { DivTypes } from './Div.types';

export const Div = ({
  children,
  width,
  height,
  bgc,
}: DivTypes): ReactElement => {
  return (
    <StyledDiv bgc={bgc} width={width} height={height}>
      {children}
    </StyledDiv>
  );
};
