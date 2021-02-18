import { useEffect, useState } from 'react';

import { ResponseValues, MessageValues } from '../interfaces/index';

export const useChatsLoad = () => {
  // Const
  const contactsUrl = 'http://localhost:1337/api/conversations';

  // State
  const [update, setUpdate] = useState(true);
  const [contacts, setContacts] = useState<Array<ResponseValues>>([]);
  const [chats, setChats] = useState<Array<Array<MessageValues>>>([[]]);
  const [activeChat, setActive] = useState<Array<MessageValues>>([]);

  // Functions
  const callback = (item: ResponseValues) => {
    setActive(() => (chats[item.id] ? chats[item.id] : []));
  };

  // Effects
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const request = await fetch(contactsUrl);
        const response = await request.json();
        setContacts(() => response);
      } catch {
        console.log('Error while fetching contacts info');
      }
    };
    if (update) {
      fetchContacts();
      setUpdate(false);
    }
  }, [update, setUpdate, setContacts]);

  useEffect(() => {
    const fetchChats = () => {
      contacts.forEach(async (item) => {
        try {
          const request = await fetch(`${contactsUrl}/${item.id}/messages`);
          const response = await request.json();
          setChats((arr) => [...arr, response]);
        } catch {
          console.log('Error while fetching chats info');
        }
      });
    };
    if (contacts.length > 0) fetchChats();
  }, [contacts]);

  return { activeChat, contacts, callback };
};
