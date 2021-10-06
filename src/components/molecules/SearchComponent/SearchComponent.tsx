import Button from '@/atoms/Button';
import Img from '@/atoms/Img';
import React, { ReactElement, useState } from 'react';
//import { SearchComponentTypes } from './SearchComponent.types';
import { StyledSearchComponent } from './SearchComponent.styled';
import { basePath } from '@/config';

console.log(basePath);

export const SearchComponent = (): ReactElement => {
  const [searchedText, setSearchedText] = useState<string>('');
  return (
    <StyledSearchComponent>
      <input
        type='text'
        value={searchedText}
        onChange={(e) => setSearchedText(e.target.value)}
      />
      <Button>{/*<Img src={`${basePath}loupe.png`}/>*/}</Button>
    </StyledSearchComponent>
  );
};
