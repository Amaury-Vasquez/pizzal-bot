import React, { Fragment, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import AppContext from '../../Context';
import {
  AuthScreen,
  AuthForm,
  Input,
  InputName,
  InputError,
  SubmitButton,
  Tab,
  TabText,
  TabSelection,
} from './styles';

export const Auth = () => {
  let history = useHistory();
  const { register, errors, handleSubmit } = useForm();
  const [activeTab, setTab] = useState('login');
  const { authUser } = useContext(AppContext);

  const onSubmit = (data: {}) => {
    if (authUser)
      authUser(data, activeTab === 'register' ? 'sign-up' : 'sign-in');
    history.push('/');
  };

  return (
    <AuthScreen>
      <TabSelection>
        <Tab active={activeTab === 'login'} onClick={() => setTab('login')}>
          <TabText> {'login'} </TabText>
        </Tab>
        <Tab
          active={activeTab === 'register'}
          onClick={() => setTab('register')}
        >
          <TabText> {'register'} </TabText>
        </Tab>
      </TabSelection>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <InputName> {'username'} </InputName>{' '}
        <InputError>
          {errors.username ? '* this field is required' : '*'}
        </InputError>
        <Input
          name="username"
          placeholder="random-user"
          ref={register({ required: true })}
        />
        <InputName> {'password'} </InputName>{' '}
        <InputError>
          {errors.password ? '* this field is required' : '*'}
        </InputError>
        <Input
          type="password"
          name="password"
          placeholder="**********"
          ref={register({ required: true })}
        />
        {activeTab === 'register' ? (
          <Fragment>
            <InputName> {'name'} </InputName>
            <InputError>
              {errors.name ? '* this field is required' : '*'}
            </InputError>
            <Input
              name="name"
              placeholder="Leo"
              ref={register({ required: true })}
            />
            <InputName> {'lastName'} </InputName>
            <InputError>
              {errors.lastName ? '* this field is required' : '*'}
            </InputError>
            <Input
              name="lastName"
              placeholder="Messi"
              ref={register({ required: true })}
            />
          </Fragment>
        ) : null}
        <SubmitButton type="submit"> {activeTab} </SubmitButton>
      </AuthForm>
    </AuthScreen>
  );
};
