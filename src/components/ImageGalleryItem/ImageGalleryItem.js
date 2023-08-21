import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, ListItemImage } from './ImageGalleyItem.styled';

export default function ImageGalleryItem({
  tags,
  src,
  largeimg,
  onClickImage,
}) {
  return (
    <ListItemImage>
      <GalleryItem
        onClick={() => onClickImage(largeimg)}
        src={src}
        alt={tags}
      />
    </ListItemImage>
  );
}

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  largeimg: PropTypes.string.isRequired,
  onClickImage: PropTypes.func.isRequired,
};
