import styled from 'styled-components';
import theme from '@/components/theme';

interface HeadingProps {
  color?: string;
  centered?: boolean;
}

export const StyledHeadingOne = styled.h1<HeadingProps>`
  font-size: 3.5rem;
  font-weight: 500;
  color: ${({ color }) => color};
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};

  @media ${theme.breakpoints.tablet} {
    font-size: 4rem;
  }
  @media ${theme.breakpoints.smallDesktop} {
    font-size: 4.5rem;
  }
`;

export const StyledHeadingTwo = styled.h2<HeadingProps>`
  font-size: 2.5rem;
  font-weight: 500;
  margin: 10px 0;
  color: ${({ color }) => color};
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};
  font-family: 'Ephesis', cursive;

  @media ${theme.breakpoints.tablet} {
    font-size: 2.6rem;
  }
`;

export const StyledHeadingThree = styled.h3<HeadingProps>`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ color }) => color};
  text-shadow: 1px 1px 2px #000;
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};

  @media ${theme.breakpoints.tablet} {
    font-size: 2.8rem;
  }
  @media ${theme.breakpoints.smallDesktop} {
    font-size: 3rem;
  }
`;

export const StyledHeadingFour = styled.h4<HeadingProps>`
  font-size: 1.8rem;
  font-weight: 200;
  margin: 15px 0;
  color: ${({ color }) => color};
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};

  @media ${theme.breakpoints.tablet} {
    font-size: 2rem;
  }
  @media ${theme.breakpoints.smallDesktop} {
    font-size: 2.3rem;
  }
`;
