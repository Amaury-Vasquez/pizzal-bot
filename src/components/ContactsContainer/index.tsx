import React from 'react';

import { Box } from './styles';
import { ChatContact } from '../ChatContact';
import { ResponseValues } from '../../interfaces/index';

export const ContactsContainer = (props: {
  contacts: Array<ResponseValues>;
  callback: Function;
}) => {
  const { contacts, callback } = props;
  return (
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
  );
};
