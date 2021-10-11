import React, { ReactElement, useState, useRef, useEffect } from 'react';
import { ReservationPopupTypes } from './ReservationPopup.types';
import {
  StyledReservationPopup,
  StyledReservationPopupWrapper,
  FormElementDiv,
} from './ReservationPopup.styled';
import Button from '@/atoms/Button';
import Paragraph from '@/atoms/Paragraph';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MenuTypes } from '@/molecules/Menu/Menu.types';
import Menu from '@/molecules/Menu';

export const ReservationPopup = ({
  restaurantTitle,
}: ReservationPopupTypes): ReactElement => {
  const [startDate, setStartDate] = useState(new Date());
  const [menu, setMenu] = useState(null);
  const date = new Date();

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
          <FormElementDiv>
            <label htmlFor='dateRef'>Data:</label>
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              minDate={new Date()}
              maxDate={
                new Date(date.getFullYear() + 1, date.getMonth(), date.getDay())
              }
            />
          </FormElementDiv>
          {menuArray.map(({ courses, price }, index) => (
            <Menu key={index} courses={courses} price={price} />
          ))}
        </form>
        {menu ? <Button>Wyślij</Button> : null}
      </StyledReservationPopup>
    </StyledReservationPopupWrapper>
  );
};
