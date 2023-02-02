interface Client {
  id: string;
  name: string;
}

interface Information {
  id: string;
  email: string;
  phone: string;
}

export interface ContactRequest {
  name: string;
  avatarUrl?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone: string;
}

export interface GetContact {
  id: string;
  name: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  create_at: Date;
  contact?: Client[];
  contactInformation?: Information[];
}

export interface ContactUpdateRequest {
  name: string;
  avatarUrl?: string;
  firstName?: string;
  lastName?: string;
}
