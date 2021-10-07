import Button from '@/atoms/Button';
import Img from '@/atoms/Img';
import React, { ReactElement, useState } from 'react';
import { StyledSearchComponent } from './SearchComponent.styled';

export const SearchComponent = (): ReactElement => {
  const [searchedText, setSearchedText] = useState<string>('');
  return (
    <StyledSearchComponent>
      <input
        placeholder='Znajdź restaurację...'
        type='text'
        value={searchedText}
        onChange={(e) => setSearchedText(e.target.value)}
      />
      <Button borderRadius={15} secondary>
        <Img src={'/loupe.png'} />
      </Button>
    </StyledSearchComponent>
  );
};
