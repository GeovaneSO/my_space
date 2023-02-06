interface Information {
  id: string;
  email: string;
  phone: string;
}

interface Contact {
  id: string;
  name: string;
  avatarUrl?: string;
}

export interface ClientRequest {
  name: string;
  username: string;
  password: string;
  avatarUrl?: string;
  email?: string;
  phone?: string;
}

export interface ClientUpdateRequest {
  name: string;
  username: string;
  password: string;
  avatarUrl?: string;
  lastName?: string;
}

export interface GetClient {
  name: string;
  username: string;
  avatarUrl?: string;
  email?: string;
  phone?: string;
  create_at: Date;
  contact?: Contact[];
  contactInformation?: Information[];
}
export interface ClientWithout {
  name: string;
  username: string;
  avatarUrl?: string;
  email?: string;
  phone?: string;
  create_at: Date;
}
