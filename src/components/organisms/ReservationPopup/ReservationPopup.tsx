import React, { ReactElement, useState } from 'react';
import { ReservationPopupTypes } from './ReservationPopup.types';
import {
  StyledReservationPopup,
  StyledReservationPopupWrapper,
  StyledReservationPopupDiv,
  FormElementDiv,
} from './ReservationPopup.styled';
import Button from '@/atoms/Button';
import Paragraph from '@/atoms/Paragraph';
import Menu from '@/molecules/Menu';
import Div from '@/atoms/Div';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { addMonths } from 'date-fns';

export const ReservationPopup = ({
  restaurantTitle,
}: ReservationPopupTypes): ReactElement => {
  const [startDate, setStartDate] = useState(new Date());
  const [menuIndex, setMenuIndex] = useState(null);

  const menuArray = [
    {
      courses: [
        { dish: 'FirstDish' },
        { dish: 'secondDish' },
        { dish: 'thirdDish' },
      ],
      price: 150,
    },
    {
      courses: [
        { dish: 'FirstDish' },
        { dish: 'secondDish' },
        { dish: 'thirdDish' },
      ],
      price: 200,
    },
  ];

  return (
    <StyledReservationPopupWrapper>
      <StyledReservationPopup>
        <Paragraph>Restauracja {restaurantTitle}:</Paragraph>
        <form>
          <StyledReservationPopupDiv>
            <FormElementDiv>
              <label htmlFor='dateRef'>Data:</label>
              <Calendar
                className='calendar'
                locale='pl-PL'
                value={startDate}
                onChange={(date: Date) => setStartDate(date)}
                maxDate={addMonths(new Date(), 5)}
                minDate={new Date()}
              />
            </FormElementDiv>
            <Div isCentered={{ align: 'center', justify: 'center' }}>
              <FormElementDiv>
                <label htmlFor='time'>Godzina:</label>
                <input
                  type='time'
                  id='time'
                  name='time'
                  min='12:00'
                  max='20:00'
                  required
                ></input>
              </FormElementDiv>
              <FormElementDiv>
                <label htmlFor='numOfPlp'>Liczba Gości:</label>
                <input
                  type='number'
                  min='20'
                  max='400'
                  step='1'
                  name='numOfPlp'
                  id='numOfPlp'
                  placeholder='20-400'
                />
              </FormElementDiv>
            </Div>
          </StyledReservationPopupDiv>
          <Div width='80%'>
            {menuArray.map(({ courses, price }, index) => (
              <Button
                noStyles
                key={index}
                onClick={(index) => setMenuIndex(index)}
              >
                <Menu courses={courses} price={price} />
              </Button>
            ))}
          </Div>
        </form>
        {menuIndex ? <Button>Wyślij</Button> : null}
      </StyledReservationPopup>
    </StyledReservationPopupWrapper>
  );
};
