import { ImageList, ImageListItem } from '@mui/material';
import { type FC } from 'react';

type PortfolioImagesProps = {
  images: string[];
};

export const PortfolioImages: FC<PortfolioImagesProps> = ({ images }) => {
  return (
    <ImageList sx={{ width: 345, height: 345, gap: '13px !important', margin: '0' }} cols={2} rowHeight={166}>
      {images.map((image, index) => (
        <ImageListItem key={`portfolio-image-${index}`}>
          <img
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            alt={image}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
