import React from 'react';

import { Box, LoaderContainer } from './styles';
import { ChatContact } from '../ChatContact';
import { ResponseValues } from '../../interfaces/index';
import { Loader } from '../Loader';

export const ContactsContainer = (props: {
  contacts: Array<ResponseValues>;
  callback: Function;
  loaded: boolean;
}) => {
  const { contacts, callback, loaded } = props;
  return loaded ? (
    <Box>
      {contacts.map((item) => (
        <ChatContact
          onClick={callback}
          conversation={item.conversation}
          fbId={item.fbId}
          id={item.id}
          lastName={item.lastName}
          name={item.name}
          phone={item.phone}
          key={`${item.fbId}+${item.name}+${item.lastName}+${item.id}+${item.phone}`}
        />
      ))}
    </Box>
  ) : (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  );
};
