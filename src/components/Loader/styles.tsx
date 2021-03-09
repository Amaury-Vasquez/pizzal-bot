import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spin = styled.div`
  border: 5px solid var(--white);
  border-top: 5px solid #16c79a;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 0.6s linear infinite;
`;
