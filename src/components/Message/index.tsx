import React, { Fragment, useState } from 'react';

import { PopupImage } from '../PopupImage';
import { MessageBox, Text, Image, Figure } from './styles';
import { MessageValues } from '../../interfaces/index';

export const Message = (props: MessageValues) => {
  const { type, url, text } = props.message;
  const [imageFocused, setFocus] = useState(false);

  const ChatImage = () => (
    <Image
      src={url ? url : ''}
      alt={'chat image'}
      onClick={() => setFocus(!imageFocused)}
    />
  );
  const ImageMessage = () => {
    return (
      <Fragment>
        <MessageBox
          type={type}
          incoming={props.sendBy === 'bot' ? true : false}
        >
          <Figure>
            <ChatImage />
          </Figure>
        </MessageBox>
        <PopupImage
          image={<ChatImage />}
          active={imageFocused}
          callback={() => setFocus(false)}
        />
      </Fragment>
    );
  };
  const TextMessage = () => {
    return (
      <MessageBox type={type} incoming={props.sendBy === 'bot' ? true : false}>
        <Text> {text ? text : ''} </Text>
      </MessageBox>
    );
  };
  return type === 'image' ? <ImageMessage /> : <TextMessage />;
};
