import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

import { ChatBox, Container, InputBox, Input, SubmitButton } from './styles';
import { Message } from '../Message';
import { useChat } from '../../hooks/useChat';
import { MessageValues } from '../../interfaces';

export const Chat = (props: { activeChat: MessageValues[] }) => {
  const { chat, input, handleChange, handleSubmit } = useChat(props.activeChat);
  return (
    <Container>
      <ChatBox>
        {chat.map((item) => {
          const { message, id, timestamp, sendBy } = item;
          return item.message.text !== '' ? (
            <Message
              id={id}
              timestamp={timestamp}
              key={`${id}+${sendBy}+${timestamp}`}
              message={message}
              sendBy={sendBy}
            />
          ) : null;
        })}
      </ChatBox>
      <InputBox onSubmit={(e) => handleSubmit(e)}>
        <Input
          type="text"
          name="user-input"
          value={input}
          placeholder="type a message here..."
          onChange={(e) => handleChange(e)}
        />
        <SubmitButton type="submit">
          <AiOutlineSend />
        </SubmitButton>
      </InputBox>
    </Container>
  );
};
