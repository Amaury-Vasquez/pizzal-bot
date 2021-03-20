import styled from 'styled-components';

export const Menu = styled.div`
  width: 8vw;
  height: 6vh;
  border: 1px solid var(--gray);
  border-top: none;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  text-align: center;
  text-transform: capitalize;
  color: var(--red);
  font-size: 16px;
  cursor: pointer;
`;
