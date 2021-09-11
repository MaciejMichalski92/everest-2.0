import React, { ReactElement } from 'react';
import { StyledHeadingOne, StyledHeadingTwo, StyledHeadingThree, StyledHeadingFour } from './Heading.styled';
import { HeadingTypes } from './Heading.types';

export const Heading = ({ children, headingType }: HeadingTypes): ReactElement => {
	const HeadingComponent = ({headingType}: HeadingTypes): ReactElement=>{
		switch (headingType){
		case 'h2':
			return <StyledHeadingTwo>{children}</StyledHeadingTwo>;
		case 'h3':
			return <StyledHeadingThree>{children}</StyledHeadingThree>;
		case 'h4':
			return <StyledHeadingFour>{children}</StyledHeadingFour>;
		default:
			return <StyledHeadingOne>{children}</StyledHeadingOne>;
		}};
		return(
			<HeadingComponent headingType={headingType}>{children}</HeadingComponent>
		);
};
