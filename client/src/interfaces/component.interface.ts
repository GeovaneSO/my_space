import { ReactNode } from 'react';
import { FieldErrors, UseFormRegister, UseFormReset } from 'react-hook-form';
import { ClientRequest, ClientRequestSession } from './client.interface';
import { ContactRequest } from './contact.interface';
import { InformationRequest } from './information.interface';
import { TaskRequest } from './task.interface';

export interface PropsNavbar {
  animation: boolean
}

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
  children?: boolean;
  type?: 'text' | 'file' | 'button' | 'checkbox' | 'password' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
  register?: UseFormRegister<ClientRequest>;
  reset: UseFormReset<ClientRequest>
  isSubmitSuccessful?: boolean
  ref?: React.LegacyRef<HTMLInputElement> | undefined
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
  children?: boolean;
  type?: 'text' | 'file' | 'button' | 'checkbox' | 'password' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
  register?: UseFormRegister<ContactRequest>;
  reset: UseFormReset<ContactRequest>
  isSubmitSuccessful?: boolean;
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
  reset: UseFormReset<InformationRequest>
  isSubmitSuccessful?: boolean;
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

export interface PropsInputTask {
  id?: string;
  label?: string;
  errors: FieldErrors<TaskRequest>
  textarea?: boolean;
  category?: boolean;
  isSubmitSuccessful?: boolean;
  type?: 'text' | 'button' | 'checkbox' | 'password' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
  reset: UseFormReset<TaskRequest>
  register: UseFormRegister<TaskRequest>;
  placeholder?: string;
  name:
    | 'title'
    | 'category'
    | 'description';
}


export interface PropsListTask {
  title: string;
  description: string;
  category: string;
  status: boolean;
  id: string;

}
