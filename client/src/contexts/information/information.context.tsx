import { AxiosError } from 'axios';
import jwt_decode, { JwtPayload } from "jwt-decode";
import { createContext, useContext, useState } from 'react';
import api from '../../api';
import { InformationProviderData, Props } from '../../interfaces/contexts.interface';
import { InformationRequest } from '../../interfaces/information.interface';
import { ContactContext } from "../contact/contact.context";
import { MatrixContext } from '../matrix.context';
import { getToken } from '../session/auth';

const Context = createContext<InformationProviderData>({} as InformationProviderData)

const InformationProvider = ({ children }: Props) => {

    const [createInformationModal, setCreateInformationModal] = useState<boolean>(false)
    const { reload, setReload } = MatrixContext();
    const { contact, getOneContactByClient } = ContactContext();

    let decoded: JwtPayload = {
        exp: 1,
        iat: 1,
        sub: 'error',
    };
    const createInformationByClient = async (data: InformationRequest) => {

        try {

            const token = getToken();

            if (token) {
                decoded = jwt_decode(token!);
            };

            if (contact.id) {
                const response = await api.post(`/information/contacts/${contact.id}`, {
                    ...data
                });


                setReload(!reload);
                return response.data
            }

            const response = await api.post(`/information/clients/${decoded.sub}`, {
                ...data
            });

            setReload(!reload);

            return response.data
        } catch (error) {
            if (error instanceof AxiosError) {

                console.log(error.response?.data);
            };
        };
    };
    const deleteInformation = async (informationId: string) => {

        try {

            const token = getToken();

            if (token) {
                decoded = jwt_decode(token!);
            };

            if (contact.id) {
                
                const response = await api.delete(`/information/${informationId}/contacts/${contact.id}`);
                
                getOneContactByClient(contact.id)

                return response.data
            }

            const response = await api.delete(`/information/${informationId}/clients/${decoded.sub}`);
            
            setReload(!reload)
            
            return response.data

        } catch (error) {
            if (error instanceof AxiosError) {

                console.log(error.response?.data);
            };
        };
    };

    const getInformationById = (informationId: string) => {
        deleteInformation(informationId)
    }

    return (
        <Context.Provider value={{
            createInformationByClient,
            deleteInformation,
            createInformationModal,
            setCreateInformationModal,
            getInformationById,
        }}>
            {children}
        </Context.Provider>
    );
};

export default InformationProvider;
export const InformationContext = () => useContext(Context);