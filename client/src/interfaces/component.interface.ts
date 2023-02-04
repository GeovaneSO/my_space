import { ReactNode } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ClientRequest } from './client.interface';

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
  type?: 'text' | 'button' | 'checkboc' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
  register: UseFormRegister<ClientRequest>;
  name:
    | 'name'
    | 'username'
    | 'password'
    | 'email'
    | 'phone'
    | 'avatarUrl'
  placeholder?: string;
}
