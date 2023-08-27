import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Backdrop, ModalImg, ModalOpen } from './ModalWindow.styled';

const body = document.querySelector('body');

export const ModalWindow = ({ src, alt, onClose }) => {
  useEffect(() => {
    const handleCloseModal = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleCloseModal);
    body.classList.add('no-scroll');

    return () => {
      window.removeEventListener('keydown', handleCloseModal);
      body.classList.remove('no-scroll');
    };
  }, [onClose]);

  const backDropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <Backdrop onClick={backDropClick}>
      <ModalOpen>
        <ModalImg src={src} alt={alt} />
      </ModalOpen>
    </Backdrop>
  );
};

ModalWindow.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalWindow;
