// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Backdrop, ModalImg, ModalOpen } from './ModalWindow.styled';

// const body = document.querySelector('body');

// export default class ModalWindow extends Component {
//   state = {
//     loading: false,
//   };

// componentDidMount() {
//   window.addEventListener('keydown', this.handleCloseModal);
//   body.classList.add('no-scroll');
// }

// componentWillUnmount() {
//   window.removeEventListener('keydown', this.handleCloseModal);
//   body.classList.remove('no-scroll');
// }

// handleCloseModal = event => {
//   if (event.code === 'Escape') {
//     this.props.onClose();
//   }
// };

// backDropClick = event => {
//   if (event.currentTarget === event.target) {
//     this.props.onClose();
//   }
// };

// render() {
//   const { src, alt } = this.props;
//   return (
//     <Backdrop onClick={this.backDropClick}>
//       <ModalOpen>
//         <ModalImg src={src} alt={alt} />
//       </ModalOpen>
//     </Backdrop>
//   );
// }
// }

// ModalWindow.propTypes = {
//   alt: PropTypes.string.isRequired,
//   src: PropTypes.string.isRequired,
//   onClose: PropTypes.func.isRequired,
// };
