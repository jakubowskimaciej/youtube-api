import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
`;

export const StyledDetail = styled.div`
  width: 100%;
  padding: 1.5rem;
  margin-top: 1rem;
  border: 0.1rem solid var(--shadow);
  border-radius: 0.7rem;
  word-wrap: break-word;
  box-shadow: 0 0.7rem 1rem -0.5rem var(--shadow);
`;

export const StyledIframe = styled.iframe`
  border: 0.1rem solid var(--shadow);
  border-radius: 0.7rem;
  box-shadow: 0 1rem 1rem -0.5rem var(--shadow);
  width: 100%;
  height: 44rem;
`;

export const StyledDescription = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
`;
