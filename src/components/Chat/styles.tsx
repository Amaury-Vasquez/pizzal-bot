import styled from "styled-components";

export const Container = styled.div`
  width: 35vw;
  height: 70vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 9fr 1fr;
  grid-gap: 2vh;
  padding: 20px;
  border-radius: 5px;
`;

export const ChatBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const InputBox = styled.form`
  height: 100%;
  width: 100%;
  padding: 0px 10px 0px 10px;
  display: grid;
  grid-template-columns: 9fr 1fr;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  height: 100%;
  width: 100%;
  padding: 15px;
  border-radius: 2px;
`;

export const SubmitButton = styled.button`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  & > svg {
    font-size: 30px;
  }
  &:hover {
    cursor: pointer;
    & > svg {
      transform: scale(1.4);
      transition: transform 0.2s ease;
    }
  }
`;
