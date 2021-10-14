import theme from '@/components/theme';
import styled from 'styled-components';

export const StyledReservationPopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  width: 98%;
  max-width: 500px;
  height: 500px;
  padding: 10px;
  background-color: ${theme.colors.white};
  border: 2px solid ${theme.colors.sapphireBlue};
  border-radius: 10px;
  box-shadow: 1px 1px 3px 0 ${theme.colors.sapphireBlue};
  z-index: 3;
  overflow-y: scroll;

  @media ${theme.breakpoints.tablet} {
    min-width: 600px;
    height: auto;
    overflow-y: auto;
  }

  button {
    width: fit-content;
    align-self: center;
  }

  form {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;

export const StyledReservationPopupDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media ${theme.breakpoints.tablet} {
    flex-direction: row;
  }
`;
export const FormElementDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  padding: 5px;
  margin: 10px;

  .calendar {
    width: 100%;
  }

  label {
    margin-bottom: 2px;
  }

  input {
    padding: 5px;
    margin: 0 auto;
    min-width: 100px;
    max-width: 110px;
    min-height: 28px;
    border: 2px solid ${theme.colors.cgBlue};
  }
`;
