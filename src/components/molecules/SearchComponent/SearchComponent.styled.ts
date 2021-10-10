import theme from '@/components/theme';
import styled from 'styled-components';

export const StyledSearchComponent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 991px;
  margin: 50px auto;
  padding: 10px;
  border-radius: 5px;
  background-color: ${theme.colors.bdazzledBlue};

  @media ${theme.breakpoints.laptop} {
    width: 80%;
  }

  input {
    width: 80%;
    padding: 0 10px;
    min-width: 200px;
    border-radius: 5px;

    :focus-visible,
    :focus,
    :active {
      outline: none;
      background-color: ${theme.colors.lightBlue};
    }

    @media ${theme.breakpoints.laptop} {
      width: 85%;
    }
  }

  button {
    padding: 5px 10px;
  }

  img {
    width: 24px;
  }
`;
