import styled from 'styled-components';
import theme from '@/components/theme';

export const StyledHeadingOne = styled.h1`
  font-size: 3.5rem;
  font-weight: 500;
  @media ${theme.breakpoints.tablet} {
    font-size: 4rem;
  }
  @media ${theme.breakpoints.smallDesktop} {
    font-size: 4.5rem;
  }
`;
export const StyledHeadingTwo = styled.h2`
  font-size: 3rem;
  font-weight: 500;
  @media ${theme.breakpoints.tablet} {
    font-size: 3.4rem;
  }
  @media ${theme.breakpoints.smallDesktop} {
    font-size: 3.8rem;
  }
`;
export const StyledHeadingThree = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  @media ${theme.breakpoints.tablet} {
    font-size: 2.8rem;
  }
  @media ${theme.breakpoints.smallDesktop} {
    font-size: 3rem;
  }
`;
export const StyledHeadingFour = styled.h4`
  font-size: 1.8rem;
  font-weight: 200;
  margin: 15px 0;
  @media ${theme.breakpoints.tablet} {
    font-size: 2rem;
  }
  @media ${theme.breakpoints.smallDesktop} {
    font-size: 2.3rem;
  }
`;
