import { ReactNode } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { ClientRequest, ClientUpdateRequest, IClient, InformationResponse, ResponseContact } from './client.interface';
import { ContactUpdateRequest, IContact } from './contact.interface';
import { InformationRequest } from './information.interface';
import { TaskRequest, TaskResponse, TaskUpdateRequest } from './task.interface';

export interface Props {
    children: ReactNode;
};

export interface MatrixProviderData {
    setFilePath: Function;
    setSuccessful: Function
    setReload: Function;
    setTasks: Function;
    setLoading: Function;
    setOneTask: Function;
    oneTask: TaskResponse;
    setInformationOwner: Function;
    informationOwner: string;
    loading: boolean;
    tasks: TaskResponse[];
    filePath: string;
    successful: boolean;
    reload: boolean;
    isPaused: boolean
    isStopped: boolean;
}

export interface ClientProviderData {
    createClient: (data: ClientRequest) => void;
    getOneClient: () => {};
    updateClient: (data: ClientUpdateRequest) => void;
    deleteClient: () => void;
    navigate:  NavigateFunction;
    setOpenModalDetailClient: Function;
    openModalInformation: boolean;
    setOpenModalInformation: Function;
    setInformationByClient: Function;
    openModalDetailClient: boolean;
    setOpenModal: Function;
    openModal: boolean;
    informationByClient: InformationResponse[];
    client: IClient;
};
export interface ReportContactsProviderData{
    createReportContacts: () => void;

};

export interface TaskClientProviderData {
    createTaskClient: (data: TaskRequest) => void;
    handleChecked: (event: boolean, id: string) => void;
    updateTask: (data: TaskUpdateRequest) => void;
    deleteTask: () => void;
    openModalDetail: (taskId: string) => void;
    setOpenModalDetailTask: Function;
    openModalDetailTask: boolean;
    setOpenModalCreateTask: Function;
    setSuccessful: Function;
    openModalCreateTask: boolean;
    successful: boolean;
}

export interface SessionProviderData {
    createSession: (data: any) => void;
    logout: () => void;
};

export interface InformationProviderData {
    createInformationByClient: (data: InformationRequest) => void,
    deleteInformation: (informationId: string) => void,
    getInformationById: (informationId: string) => void;
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
    setOpenContactInformation: Function;
    openContactInformation: boolean; 
    openDetailContact: boolean;
    openCreateContact: boolean;
    contactsByClient: ResponseContact[];
    contact: IContact;
}