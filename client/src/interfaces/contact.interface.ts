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
    email: string;
    phone: string;
    avatarUrl?: string; 
}
export interface ContactUpdateRequest {
    name?: string;
    avatarUrl?: string; 
}

export interface IContact {
    id: string;
    name: string;
    avatarUrl?: string;
    create_at?: Date;
    contactInformations?: Information[];
    clients?: Client[];
}