import React from "react";

import { MessageBox, Text } from "./styles";
import { MessageValues } from "../../interfaces/index";

export const Message = (props: MessageValues) => {
  return (
    <MessageBox incoming={props.sendby === "bot" ? true : false}>
      <Text> {props.message.text} </Text>
    </MessageBox>
  );
};
