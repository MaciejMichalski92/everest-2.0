import { SetStateAction } from 'react';

export interface MenuTypes {
  onClick?: (index: SetStateAction<null>) => void;
  courses: {
    dish: string;
  }[];
  price: number;
}
[];
