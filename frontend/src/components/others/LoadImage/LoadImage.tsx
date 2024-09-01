'use client';

import { useState } from 'react';
import Image from 'next/image';
import { LoadImageType } from './../../../types/LoadImageType';
import './LoadImage.css';

const LoadImage = (props: LoadImageType) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <Image
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      placeholder="blur"
      className={
        loaded
          ? `disable_blur ${props.className}`
          : `blur_image ${props.className}`
      }
      onLoadingComplete={() => setLoaded(true)}
    />
  );
};

export default LoadImage;
