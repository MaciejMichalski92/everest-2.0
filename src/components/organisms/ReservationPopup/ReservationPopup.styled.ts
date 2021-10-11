import theme from '@/components/theme';
import styled from 'styled-components';

export const StyledReservationPopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
`;

export const StyledReservationPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  min-width: 280px;
  min-height: 350px;
  padding: 10px;
  background-color: ${theme.colors.white};
  border: 2px solid ${theme.colors.sapphireBlue};
  border-radius: 10px;
  box-shadow: 1px 1px 3px 0 ${theme.colors.sapphireBlue};
  z-index: 3;

  @media ${theme.breakpoints.tablet} {
    min-width: 600px;
  }

  form {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px 0;
  }

  button {
    width: fit-content;
    align-self: center;
  }
`;

export const FormElementDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 40%;
  padding: 5px;
  margin: 10px;

  label {
    text-align: center;
  }

  input {
    padding: 5px;
    margin: 0 auto;
    max-width: 100px;
  }
`;
