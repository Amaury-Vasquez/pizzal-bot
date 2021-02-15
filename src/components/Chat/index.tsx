import React from "react";
import { AiOutlineSend } from "react-icons/ai";

import { ChatBox, Container, InputBox, Input, SubmitButton } from "./styles";
import { Message } from "../Message";
import { useChat } from "../../hooks/useChat";

export const Chat = () => {
  const { chat, input, handleChange, handleSubmit } = useChat();

  return (
    <Container>
      <ChatBox>
        {chat.map((item, i) => (
          <Message
            key={`${item.incoming}+${i}`}
            text={item.text}
            incoming={item.incoming}
          />
        ))}
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
