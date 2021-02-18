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
  const { setAuth } = useContext(AppContext);

  const onSubmit = () => {
    if (setAuth) setAuth(true);
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
        <InputName> {'email'} </InputName>{' '}
        <InputError>
          {errors.email ? '* this field is required' : '*'}
        </InputError>
        <Input
          name="email"
          placeholder="youremail@example.com"
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
            <InputName> {'username'} </InputName>
            <InputError>
              {errors.email ? '* this field is required' : '*'}
            </InputError>
            <Input
              name="username"
              placeholder="newuser"
              ref={register({ required: true })}
            />
          </Fragment>
        ) : null}
        <SubmitButton type="submit"> {activeTab} </SubmitButton>
      </AuthForm>
    </AuthScreen>
  );
};
