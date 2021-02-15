import { useEffect, useState } from "react";

import { MessageValues } from "../interfaces";

export const useChat = () => {
  // Constantes
  const url = "";
  // Estado
  const [chat, setChat] = useState<MessageValues[]>([]);
  const [input, setInput] = useState("");
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
      setChat((arr) => [...arr, { text: input, incoming: false }]);
      setInput("");
      setUpdate(false);
    }
  }, [update, setUpdate, chat, setChat, input, setInput]);
  return { chat, input, handleChange, handleSubmit };
};
