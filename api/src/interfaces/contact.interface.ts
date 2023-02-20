interface Client {
  id: string;
  name: string;
}

interface Contact {
  id: string;
  name: string;
  avatarUrl: string;
  create_at: Date;
  update_at: Date;
  contactInformations: Information[];
}

export interface GetManyContacts {
  id: string;
  name: string;
  avatarUrl: string;
  create_at: Date;
  update_at: Date;
  contactInformations: Information[];
  clients: Client[];
}

export interface GetOneContact {
  id: string;
  name: string;
  avatarUrl?: string;
  create_at: Date;
  contactInformations: Information[];
  clients: Client[];
}

interface Information {
  id: string;
  email: string;
  phone: string;
}

export interface ContactRequest {
  name: string;
  avatarUrl?: string;
  email: string;
  phone: string;
}

export interface GetClientContact {
  contacts?: Contact[];
}

export interface ContactUpdateRequest {
  name: string;
  avatarUrl?: string;
}
