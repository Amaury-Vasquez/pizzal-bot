import styled from 'styled-components';

export const Menu = styled.div`
  width: 8vw;
  min-height: 5vh;
  height: auto;
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
  display: flex;
  cursor: pointer;
  & > span {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 16px;
    & > svg {
      color: var(--red);
    }
  }
`;
