import React, { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { Background, ImageContainer, PopupContainer } from './styles';

export const PopupImage = (props: {
  image: JSX.Element;
  active: boolean;
  callback: Function;
}) => {
  const { active, callback, image } = props;
  useEffect(() => {
    const keyPressed = (e: KeyboardEvent) => {
      if (e.key === 'Escape') callback();
    };
    window.addEventListener('keyup', keyPressed);

    return () => window.removeEventListener('keyup', keyPressed);
  }, [props]);

  return (
    <Background active={active} onClick={() => callback()}>
      <AiOutlineClose />
      <PopupContainer>
        <ImageContainer>{image}</ImageContainer>
      </PopupContainer>
    </Background>
  );
};
