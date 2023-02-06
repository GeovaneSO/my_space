import { ReactNode } from 'react';
import { ClientRequest, ClientUpdateRequest, IClient, InformationResponse, ResponseContact } from './client.interface';
import { ContactUpdateRequest, IContact } from './contact.interface';
import { InformationRequest } from './information.interface';

export interface Props {
    children: ReactNode;
};

export interface MatrixProviderData {
    setReload: Function;
    reload: boolean;
}

export interface ClientProviderData {
    createClient: (data: ClientRequest) => void;
    getOneClient: () => {};
    updateClient: (data: ClientUpdateRequest) => void;
    deleteClient: () => void;
    setInformationByClient: Function
    setOpenModal: Function;
    openModal: boolean;
    informationByClient: InformationResponse[];
    client: IClient;
};
export interface ReportContactsProviderData{
    createReportContacts: () => void;

};

export interface SessionProviderData {
    createSession: (data: any) => void;
};

export interface InformationProviderData {
    createInformationByClient: (data: InformationRequest) => void,
    createInformationByContact: (data: InformationRequest) => void,
    setCreateInformationModal: Function;
    createInformationModal: boolean;
};

export interface ContactProviderData {
    createContact: (data: any) => void;
    getAllContactsByClient: () => void;
    getOneContactByClient: (contactId: string) => void;
    updateContact: (data: ContactUpdateRequest) => void;
    deleteContact: () => void;
    openModalDetail: (contactId: string) => void;
    setOpenCreateContact: Function
    setContactsByClient:Function;
    setOpenDetailContact: Function;
    openDetailContact: boolean;
    openCreateContact: boolean;
    contactsByClient: ResponseContact[];
    contact: IContact;
}