import React, { ReactElement } from 'react';
import { StyledFirstHeader } from './FirstHeader.styled';
import { FirstHeaderTypes } from './FirstHeader.types';

export const FirstHeader = ({ children }: FirstHeaderTypes): ReactElement => (
	<StyledFirstHeader>{children}</StyledFirstHeader>
);
