import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLoad } from './Button.styled';

export default function Button({ loadImages }) {
  return (
    <ButtonLoad type="button" onClick={loadImages}>
      Load more...
    </ButtonLoad>
  );
}

Button.propTypes = {
  loadImages: PropTypes.func.isRequired,
};
