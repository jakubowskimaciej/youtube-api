import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  ${'' /* margin: 1rem auto; */}
  width: 99%;
  cursor: pointer;
`;

export const StyledImage = styled.img`
  width: 14rem;
  margin-right: 1.6rem;
`;

export const StyledUnderline = styled.div`
  height: 0.1rem;
  width: 100%;
  margin: 0.5rem 0 0.5rem 0;
  background-color: var(--shadow);
`;
