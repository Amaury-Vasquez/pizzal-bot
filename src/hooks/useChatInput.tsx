import { useEffect, useState } from "react";

import { MessageValues } from "../interfaces";

export const useChatInput = (currentChat: Array<MessageValues>) => {
  // Constantes

  // Estado
  const [chat, setChat] = useState<MessageValues[]>([]);
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [update, setUpdate] = useState(false);

  // Funciones
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input !== "") {
      setUpdate(true);
    }
  };

  // Efectos
  useEffect(() => {
    if (update) {
      setChat((arr) => [
        ...arr,
        {
          id: chat.length,
          sendby: "customer",
          timestamp: "",
          message: { text: input, type: "text" },
        },
      ]);
      setInput("");
      setUpdate(false);
    }
  }, [update, setUpdate, chat, setChat, input, setInput]);

  useEffect(() => {
    setChat(() => currentChat);
  }, [currentChat]);
  return { chat, input, handleChange, handleSubmit };
};
