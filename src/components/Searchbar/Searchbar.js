import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import {
  SearchFormButton,
  SearchFormInput,
  SearchbarForm,
  SearchbarHeader,
} from './Searchbar.styled';
import { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
  const [searchInput, searchInputSetState] = useState('');

  const handlerSubmit = event => {
    event.preventDefault();
    if (searchInput.trim() === '') {
      return toast.error('Please enter request');
    }
    onSubmit(searchInput);
    searchInputSetState('');
  };

  const handlerChange = event => {
    searchInputSetState(event.currentTarget.value.toLowerCase());
  };

  return (
    <SearchbarHeader>
      <SearchbarForm onSubmit={handlerSubmit}>
        <SearchFormButton type="submit">Search</SearchFormButton>
        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchInput}
          onChange={handlerChange}
        />
      </SearchbarForm>
    </SearchbarHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
