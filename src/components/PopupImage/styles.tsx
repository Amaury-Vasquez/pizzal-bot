import styled from 'styled-components';

export const Background = styled.div<{ active: boolean }>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: ${(props) => (props.active ? 'block' : 'none')};
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: right;
  & > svg {
    margin-top: 2vh;
    margin-right: 4vw;
    font-size: 30px;
    cursor: pointer;
    color: var(--gray);
  }
`;

export const PopupContainer = styled.div`
  margin: 0 auto;
  width: 35%;
  box-sizing: border-box;
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: right;
`;

export const ImageContainer = styled.figure`
  height: auto;
  padding: 10px;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;
