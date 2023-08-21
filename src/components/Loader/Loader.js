import React, { Component } from 'react';
import { Dna } from 'react-loader-spinner';
import { Loader } from './Loader.styled';

export default class LoaderSpinner extends Component {
  render() {
    return (
      <Loader>
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </Loader>
    );
  }
}
