interface Client {
  id: string;
  name: string;
}

interface Contact {
  id: string;
  name: string;
  avatarUrl?: string;
  create_at: Date;
  contactInformation: Information[];
}

export interface GetOneContact {
  id: string;
  name: string;
  avatarUrl?: string;
  create_at: Date;
  contactInformation: Information[];
  client: Client[];
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
  contact?: Contact[];
}

export interface ContactUpdateRequest {
  name: string;
  avatarUrl?: string;
}
