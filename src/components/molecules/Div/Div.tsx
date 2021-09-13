import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { DivTypes } from './Div.types';

export const Div = ({ children, width, height }: DivTypes): ReactElement => {
  const StyledDiv = styled.div`
    width: ${width ? width : '100%'};
    height: ${height ? height : 'auto'};
  `;

  return <StyledDiv>{children}</StyledDiv>;
};
