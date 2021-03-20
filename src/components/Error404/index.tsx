import React from 'react';
import { MdError } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';
import { ErrorMessage } from './styles';

export const Error404 = (props: { url: string }) => {
  return (
    <ErrorMessage>
      <MdError />
      <h1> {'Error 404'} </h1>
      <h2> {props.url + " was moved or doesn't exists"} </h2>
      <button>
        <a href="/">
          <AiOutlineHome />
        </a>
      </button>
    </ErrorMessage>
  );
};
