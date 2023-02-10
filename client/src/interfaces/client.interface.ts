export interface InformationResponse {
  id: string;
  email: string;
  phone: string;
}

export interface ResponseContact {
  id: string;
  name: string;
  avatarUrl: string;
}


export interface ClientRequest {
  name: string;
  username: string;
  password: string;
  email: string;
  phone: string;
  avatarUrl: string;
};

export interface ClientUpdateRequest {
  name: string;
  password: string;
  avatarUrl: string;
};

export interface ClientRequestSession{
  username: string;
  password: string;
};

export interface IClient {
  name?: string;
  username?: string;
  avatarUrl?: string;
  email?: string;
  phone?: string;
  create_at?: Date;
  contacts: ResponseContact[];
  contactInformations?: InformationResponse[];
};