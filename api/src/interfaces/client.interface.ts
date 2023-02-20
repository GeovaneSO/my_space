interface Information {
  id: string;
  email: string;
  phone: string;
}

interface Category {
  id: string;
  name: string;
}

interface Task {
  id: string;
  title: string;
  description: string;
  category: Category;
  status: boolean;
  create_at: Date;
  update_at: Date;
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
  contacts?: Contact[];
  contactInformations?: Information[];
  tasks?: Task[];
}
export interface ClientWithout {
  name: string;
  username: string;
  avatarUrl?: string;
  email?: string;
  phone?: string;
  create_at: Date;
}
