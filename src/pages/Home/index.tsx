import React from 'react';

import { Container } from './styles';
import { Page } from '../../styles/elements';
import { Chat } from '../../components/Chat';
import { ContactsContainer } from '../../components/ContactsContainer';
import { useChatsLoad } from '../../hooks/useChatsLoad';

export const Home = () => {
  const { activeChat, contacts, callback } = useChatsLoad();

  return (
    <Page>
      <Container>
        <ContactsContainer contacts={contacts} callback={callback} />
        <Chat activeChat={activeChat} />
      </Container>
    </Page>
  );
};
