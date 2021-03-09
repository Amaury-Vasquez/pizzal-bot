import React, { useContext } from 'react';

import { Container } from './styles';
import { Page } from '../../styles/elements';
import { Chat } from '../../components/Chat';
import { ContactsContainer } from '../../components/ContactsContainer';
import { useChatsLoad } from '../../hooks/useChatsLoad';
import AppContext from '../../Context/index';

export const Home = () => {
  const { token, url } = useContext(AppContext);
  const { loaded, activeChat, contacts, callback } = useChatsLoad(
    token ? token.jwt : '',
    url,
  );
  return (
    <Page>
      <Container>
        <ContactsContainer
          loaded={loaded}
          contacts={contacts}
          callback={callback}
        />
        <Chat activeChat={activeChat} />
      </Container>
    </Page>
  );
};
