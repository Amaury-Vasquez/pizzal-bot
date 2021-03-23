import { useEffect, useState } from 'react';

import { ResponseValues, MessageValues } from '../interfaces/index';

export const useChatsLoad = (token: string, url: string | undefined) => {
  // State
  const [update, setUpdate] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [contacts, setContacts] = useState<Array<ResponseValues>>([]);
  const [chats, setChats] = useState<Array<Array<MessageValues>>>([[]]);
  const [activeChat, setActive] = useState<Array<MessageValues>>([]);

  // Functions
  const callback = (item: ResponseValues) => {
    setActive(() => (chats[item.id] ? chats[item.id] : []));
  };

  // Effects
  useEffect(() => {
    if (token !== '') setUpdate(true);
  }, [token, setUpdate]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const request = await fetch(`${url}/api/conversations`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });
        const response = await request.json();
        setContacts(() => response);
        setLoaded(true);
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
          const request = await fetch(
            `${url}/api/conversations/${item.id}/messages`,
            {
              method: 'GET',
              mode: 'cors',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
              },
            },
          );
          const response = await request.json();
          setChats((arr) => [...arr, response]);
        } catch {
          console.log('Error while fetching chats info');
        }
      });
    };
    if (contacts.length > 0) fetchChats();
  }, [contacts]);

  return { activeChat, contacts, callback, loaded };
};
