import styled from "styled-components";

export const MessageBox = styled.div<{ incoming: boolean }>`
  display: flex;
  /* justify-content: left; */
  align-items: center;
  width: 100%;
  height: auto;
  text-align: left;
  padding: 15px;
  background-color: ${(props) =>
    props.incoming ? "var(--gray)" : "var(--green)"};
  margin-bottom: 1vh;
  border-radius: 2px;
`;

export const Text = styled.span`
  height: 100%;
  width: auto;
  line-height: 1.5em;
  max-width: 90%;
  font-size: 16px;
`;
