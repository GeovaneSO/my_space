import { AxiosError } from 'axios';
import jwt_decode, { JwtPayload } from "jwt-decode";
import { createContext, useContext, useState } from 'react';
import api from '../../api';
import { ContactContext } from "../contact/contact.context";
import { InformationProviderData, Props } from '../../interfaces/contexts.interface';
import { InformationRequest } from '../../interfaces/information.interface';
import { MatrixContext } from '../matrix.context';
import { getToken } from '../session/auth';


const Context = createContext<InformationProviderData>({} as InformationProviderData)

const InformationProvider = ({ children }: Props) => {

    const [createInformationModal, setCreateInformationModal] = useState<boolean>(false)
	const { reload, setReload } = MatrixContext();
    const { contact } = ContactContext();

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

          const response =  await api.post(`/information/clients/${decoded.sub}`, {
                ...data
            });
            console.log(response.data);
            
            setReload(!reload)

        } catch (error) {
            if (error instanceof AxiosError) {

                console.log(error.response?.data);
            };
        };
    };
    const createInformationByContact = async (data: InformationRequest) => {

        try {

            await api.post(`/information/contacts/${contact.id}`, {
                ...data
            });

            setReload(!reload)

        } catch (error) {
            if (error instanceof AxiosError) {

                console.log(error.response?.data);
            };
        };
    };

    return (
        <Context.Provider value={{
            createInformationByClient,
            createInformationByContact,
            createInformationModal, 
            setCreateInformationModal,
        }}>
            {children}
        </Context.Provider>
    );
};

export default InformationProvider;
export const InformationContext = () => useContext(Context);