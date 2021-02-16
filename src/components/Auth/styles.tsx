import styled from "styled-components";

export const AuthScreen = styled.div`
  width: 25vw;
  height: auto;
  min-height: 25vh;
  box-shadow: var(--shadow);
  /* background-color: var(--white); */
  & > :last-child {
    padding: 20px;
  }
`;

export const TabSelection = styled.div`
  display: grid;
  width: 100%;
  height: 5vh;
  grid-template-columns: 1fr 1fr;
`;

export const Tab = styled.div<{ active: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.active ? "" : "var(--white)")};
  opacity: ${(props) => (props.active ? "1" : "0.5")};
  &:hover {
    cursor: pointer;
  }
`;

export const TabText = styled.span`
  text-transform: capitalize;
`;

export const AuthForm = styled.form`
  margin-top: 2vh;
  height: auto;
  min-height: 25vh;
  width: 100%;
  & > * {
    padding: 5px;
    font-size: 14px;
  }
  & > input {
    margin-top: 1vh;
    margin-bottom: 2vh;
  }
`;

export const Input = styled.input`
  height: 5vh;
  width: 100%;
  outline: none;
  border: none;
  background-color: var(--white);
`;

export const InputName = styled.span`
  text-transform: capitalize;
`;

export const InputError = styled.span`
  color: red;
`;

export const SubmitButton = styled.button`
  width: 50%;
  height: 5vh;
  margin: 0 auto;
  background-color: var(--white);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
`;
