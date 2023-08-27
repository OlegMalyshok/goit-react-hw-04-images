// import { Component } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import PropTypes from 'prop-types';
// import {
//   SearchFormButton,
//   SearchFormInput,
//   SearchbarForm,
//   SearchbarHeader,
// } from './Searchbar.styled';

// export default class Searchbar extends Component {
//   static propTypes = {
//     onSubmit: PropTypes.func,
//   };

// state = {
//   searchInput: '',
// };
// handlerSubmit = event => {
//   event.preventDefault();
//   if (this.state.searchInput.trim() === '') {
//     return toast.error('Please enter request');
//   }
//   this.props.onSubmit(this.state.searchInput);
//   this.setState({ searchInput: '' });
// };
// handlerChange = event => {
//   this.setState({ searchInput: event.currentTarget.value.toLowerCase() });
// };
//   render() {
//     return (
//       <SearchbarHeader>
//         <SearchbarForm onSubmit={this.handlerSubmit}>
//           <SearchFormButton type="submit">Search</SearchFormButton>
//           <SearchFormInput
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.searchInput}
//             onChange={this.handlerChange}
//           />
//         </SearchbarForm>
//       </SearchbarHeader>
//     );
//   }
// }
