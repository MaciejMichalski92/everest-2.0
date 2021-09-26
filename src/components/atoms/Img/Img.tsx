import React, { ReactElement } from 'react';
import { ImgTypes } from './Img.types';
import theme from '@/components/theme';

export const Img = ({ picture = true, alt, src }: ImgTypes): ReactElement =>
  picture ? (
    <picture>
      <source srcSet='' media={theme.breakpoints.tablet} />
      <img src={src} alt={alt ? alt : 'zdjęcie'} />
    </picture>
  ) : (
    <img src={src} alt={alt ? alt : 'zdjęcie'} />
  );
