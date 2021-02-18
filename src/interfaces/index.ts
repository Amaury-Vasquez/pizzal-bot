export interface ContextValues {
  isAuth?: boolean;
  setAuth?: Function;
}

export interface AuthFormValues {
  email: string;
  password: string;
}

export interface ResponseValues {
  conversation: { id: number; source: string };
  fbId: string | null;
  id: number;
  lastName: string | null;
  name: string | null;
  phone: string | null;
}

export interface MessageValues {
  id: number;
  sendby: string;
  timestamp: string;
  message: {
    text: string;
    type: string;
  };
}
