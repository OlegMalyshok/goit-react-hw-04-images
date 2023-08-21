import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';

export default function ImageGallery({ images, onClickImage }) {
  return (
    <ImageGalleryList>
      {images.map(({ id, tags, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            tags={tags}
            src={webformatURL}
            largeimg={largeImageURL}
            onClickImage={onClickImage}
          />
        );
      })}
    </ImageGalleryList>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onClickImage: PropTypes.func.isRequired,
};
