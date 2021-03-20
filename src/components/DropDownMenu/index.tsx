import React, { ElementType, useState } from 'react';

import { DropDown, DropDownContent } from './styles';

export const DropDownMenu = (props: {
  content?: ElementType;
  cover: ElementType;
}) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <DropDown active={active}>
      <props.cover
        onClick={() => {
          setActive(!active);
        }}
      />
      <DropDownContent>
        {props.content ? <props.content /> : ''}
      </DropDownContent>
    </DropDown>
  );
};
