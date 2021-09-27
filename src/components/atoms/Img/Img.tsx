import React, { ReactElement } from 'react';
import { ImgTypes } from './Img.types';
import theme from '@/components/theme';

export const Img = ({
  picture = true,
  alt,
  src,
  largeSrc,
}: ImgTypes): ReactElement =>
  picture ? (
    <picture>
      <source srcSet={largeSrc} media={theme.breakpoints.tablet} />
      <img src={src ? src : largeSrc} alt={alt ? alt : 'zdjęcie'} />
    </picture>
  ) : (
    <img src={src} alt={alt ? alt : 'zdjęcie'} />
  );
