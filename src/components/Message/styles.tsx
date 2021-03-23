import styled from 'styled-components';

export const MessageBox = styled.div<{ incoming: boolean; type: string }>`
  display: flex;
  /* justify-content: left; */
  align-items: center;
  ${(props) =>
    props.type === 'image'
      ? 'padding: 0px; width: 70%;'
      : 'padding: 15px; width: 100%;'};
  height: auto;
  text-align: left;
  background-color: ${(props) =>
    props.incoming ? 'var(--gray)' : 'var(--green)'};
  margin-bottom: 1vh;
  border-radius: 2px;
`;

export const Text = styled.span`
  height: 100%;
  width: auto;
  line-height: 1.5em;
  font-size: 16px;
  max-width: 90%;
`;

export const Figure = styled.figure`
  height: auto;
  width: 100%;
  text-align: center;
  align-items: center;
  box-sizing: border-box;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s ease;
  }
`;
