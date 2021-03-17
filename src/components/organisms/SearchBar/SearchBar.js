import React, { useState } from 'react';
import {
  Wrapper,
  StyledForm,
  StyledLabel,
  StyledInput,
} from './SearchBar.styles';

const SearchBar = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInputValue('');

    props.submitFn(inputValue);
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleFormSubmit}>
        <StyledLabel htmlFor="video-search">Video Search</StyledLabel>
        <StyledInput
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </StyledForm>
    </Wrapper>
  );
};

export default SearchBar;
