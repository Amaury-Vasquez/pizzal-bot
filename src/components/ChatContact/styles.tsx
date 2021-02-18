import styled from "styled-components";

export const Contact = styled.div`
  width: 100%;
  height: 6vh;
  padding: 5px;
  margin-bottom: 1vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--gray);
  border-radius: 2px;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  & > svg {
    font-size: 20px;
  }
`;

export const UserInfo = styled.span`
  font-size: 14px;
`;
