import styled from 'styled-components';

export const Box = styled.div`
  width: 25vw;
  min-height: 100%;
  height: auto;
  overflow-y: scroll;
  padding: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
  border-radius: 5px;
`;

export const LoaderContainer = styled.div`
  width: 25vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > span {
    padding: 20px;
    width: 100%;
    height: 100%;
    & > span {
      background-color: var(--white);
      width: 100%;
      height: 100%;
    }
  }
`;
