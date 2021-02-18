import React from 'react';
import { FaWhatsapp, FaFacebook, FaUserAlt } from 'react-icons/fa';
import { GrStatusUnknown } from 'react-icons/gr';

import { Contact, UserInfo } from './styles';
import { ResponseValues } from '../../interfaces/index';

export const ChatContact = (props: ResponseValues & { onClick: Function }) => {
  const { name, lastName, conversation, fbId, id, phone, onClick } = props;
  return (
    <Contact
      onClick={() => {
        onClick({ name, lastName, fbId, id, phone, conversation });
      }}
    >
      <FaUserAlt />
      <UserInfo>
        {name || lastName
          ? `${name ? name : ''} ${lastName ? lastName : ''}`
          : phone
          ? `+${phone}`
          : 'unknown contact'}
      </UserInfo>
      {conversation.source === 'facebook' ? (
        <FaFacebook />
      ) : conversation.source === 'whatsapp' ? (
        <FaWhatsapp />
      ) : (
        <GrStatusUnknown />
      )}
    </Contact>
  );
};
