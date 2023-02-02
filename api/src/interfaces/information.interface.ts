interface Client {
  name: string;
  id: string;
}
interface Contact {
  name: string;
  id: string;
}

export interface ContactInformationResponse {
  id: string;
  email: string;
  phone: string;
  create_at: Date;
  client?: Client;
  contact?: Contact;
}

export interface InformationRequest {
  email: string;
  phone: string;
}
