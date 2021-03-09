export interface ContextValues {
  isDeviceAuth?: boolean;
  setDeviceAuth?: Function;
  authUser?: Function;
  token?: { jwt: string };
  isUserAuth?: boolean;
  url?: string;
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
  sendBy: string;
  timestamp: string;
  message: {
    text: string;
    type: string;
  };
}
