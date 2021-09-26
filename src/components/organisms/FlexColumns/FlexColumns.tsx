import React, { ReactElement } from 'react';
import {
  FlexColumnsTypes,
  ColumnsNumberComponentTypes,
} from './FlexColumns.types';
import { StyledFlexColumns, Column } from './FlexColumns.styled';

export const FlexColumns = ({
  columnNumber = 2,
  first,
  second,
  third,
  forth,
  children,
}: FlexColumnsTypes): ReactElement => {
  const ColumnsNumberComponent = ({
    columnNumber,
    first,
    second,
    third,
    forth,
  }: ColumnsNumberComponentTypes) => {
    switch (columnNumber) {
      case 1:
        return <Column>{first}</Column>;
      case 3:
        return (
          <StyledFlexColumns>
            <Column>{first}</Column>
            <Column>{second}</Column>
            <Column>{third}</Column>
          </StyledFlexColumns>
        );
      case 4:
        return (
          <StyledFlexColumns>
            <Column>{first}</Column>
            <Column>{second}</Column>
            <Column>{third}</Column>
            <Column>{forth}</Column>
          </StyledFlexColumns>
        );
      default:
        return (
          <StyledFlexColumns>
            <Column>{first}</Column>
            <Column>{second}</Column>
          </StyledFlexColumns>
        );
    }
  };

  return (
    <ColumnsNumberComponent
      first={first}
      second={second}
      third={third}
      forth={forth}
      columnNumber={columnNumber}
    >
      {children}
    </ColumnsNumberComponent>
  );
};
