import styled, { StyledFunction } from 'styled-components';

export const DropDown = styled.div<{ active: boolean }>`
  position: relative;
  display: inline-block;
  & > div {
    display: ${(props) => (props.active ? 'block' : 'none')};
  }
  &:hover {
    display: block;
  }
  & > svg {
    font-size: 25px;
    margin-right: 2vw;
    cursor: pointer;
  }
`;

export const DropDownContent = styled.div`
  margin-top: 1.5vh;
  margin-right: 1vw;
  display: none;
  position: absolute;
  width: auto;
  height: auto;
  right: 0;
  z-index: 1;
  & > * {
    display: block;
  }
`;
