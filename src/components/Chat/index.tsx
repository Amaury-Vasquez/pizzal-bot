import React from "react";
import { AiOutlineSend } from "react-icons/ai";

import { ChatBox, Container, InputBox, Input, SubmitButton } from "./styles";
import { Message } from "../Message";
import { useChatInput } from "../../hooks/useChatInput";
import { MessageValues } from "../../interfaces";

export const Chat = (props: { activeChat: MessageValues[] }) => {
  const { chat, input, handleChange, handleSubmit } = useChatInput(
    props.activeChat
  );
  return (
    <Container>
      <ChatBox>
        {chat.map((item) => {
          return item.message.text !== "" ? (
            <Message
              id={item.id}
              timestamp={item.timestamp}
              key={`${item.id}+${item.sendby}+${item.timestamp}`}
              message={{ text: item.message.text, type: "text" }}
              sendby={item.sendby}
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
