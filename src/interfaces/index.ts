export interface MessageValues {
  text: string;
  incoming: boolean;
}

export interface ContextValues {
  isAuth?: boolean;
  setAuth?: Function;
}

export interface AuthFormValues {
  email: string;
  password: string;
}
