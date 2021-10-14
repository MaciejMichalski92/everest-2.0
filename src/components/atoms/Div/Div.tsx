import React, { ReactElement } from 'react';
import { StyledDiv } from './Div.styled';
import { DivTypes } from './Div.types';

export const Div = ({
  children,
  width,
  height,
  bgc,
  isCentered,
}: DivTypes): ReactElement => {
  return (
    <StyledDiv isCentered={isCentered} bgc={bgc} width={width} height={height}>
      {children}
    </StyledDiv>
  );
};
