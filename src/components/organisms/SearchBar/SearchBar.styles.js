import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 60%;
  min-height: 7.5rem;
  margin: 1rem auto;
  border: 1px solid var(--shadow);
  border-radius: 0.7rem;
  box-shadow: 0 0.7rem 1rem -0.5rem var(--shadow);
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem 5rem;
`;

export const StyledLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-black);
`;
export const StyledInput = styled.input`
  padding: 0.5rem 1.5rem;
  margin: 0.5rem 0 1rem 0;
  outline: none;
  border: 1px solid var(--shadow);
  border-radius: 5rem;
  transition: 0.3s all;
  background-color: #fcfcfc;

  &:active,
  &:focus {
    box-shadow: 0 0.5rem 2rem -0.5rem var(--shadow);
  }
`;
