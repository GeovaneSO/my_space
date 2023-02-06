import { ReactNode } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ClientRequest, ClientRequestSession } from './client.interface';
import { ContactRequest } from './contact.interface';
import { InformationRequest } from './information.interface';

export interface PropsButton {
  children: ReactNode;
  id?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
  className?: string;
}

export interface PropsInput {
  id?: string;
  label?: string;
    errors: FieldErrors<ClientRequest>
  children?: ReactNode;
  type?: 'text' | 'button' | 'checkbox' | 'password' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
  register?: UseFormRegister<ClientRequest>;
  name?:
    | 'name'
    | 'username'
    | 'password'
    | 'email'
    | 'phone'
    | 'avatarUrl'
  placeholder?: string;
}
export interface PropsInputContact {
  id?: string;
  label?: string;
    errors: FieldErrors<ClientRequest>
  children?: ReactNode;
  type?: 'text' | 'button' | 'checkbox' | 'password' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
  register?: UseFormRegister<ContactRequest>;
  name?:
    | 'name'
    | 'email'
    | 'phone'
    | 'avatarUrl'
  placeholder?: string;
}

export interface PropsInputInformation {
  id?: string;
  label?: string;
    errors: FieldErrors<ClientRequest>
  children?: ReactNode;
  type?: 'text' | 'button' | 'checkbox' | 'password' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
  register?: UseFormRegister<InformationRequest>;
  name?:
    | 'email'
    | 'phone'
  placeholder?: string;
}

export interface PropsInputSession {
  id?: string;
  label?: string;
    errors: FieldErrors<ClientRequest>
  children?: ReactNode;
  type?: 'text' | 'button' | 'checkbox' | 'password' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | any;

  register: UseFormRegister<ClientRequestSession>;
  placeholder?: string;
  nameSession:
    | 'username'
    | 'password';
}

