import { AxiosError } from 'axios';
import jwt_decode, { JwtPayload } from "jwt-decode";
import { createContext, useContext, useState } from 'react';
import { api } from '../../api';
import { InformationProviderData, Props } from '../../interfaces/contexts.interface';
import { InformationRequest } from '../../interfaces/information.interface';
import { ContactContext } from "../contact/contact.context";
import { MatrixContext } from '../matrix.context';
import { getToken, logout } from '../session/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Context = createContext<InformationProviderData>({} as InformationProviderData)

const InformationProvider = ({ children }: Props) => {

    const [createInformationModal, setCreateInformationModal] = useState<boolean>(false)
    const { reload, setReload, setLoading, informationOwner, setSuccessful, successful } = MatrixContext();
    const { contact, getOneContactByClient } = ContactContext();
	const navigate = useNavigate();

    let decoded: JwtPayload = {
        exp: 1,
        iat: 1,
        sub: 'error',
    };
    const createInformationByClient = async (data: InformationRequest) => {
        
        try {
            setCreateInformationModal(!createInformationModal)
            setLoading(true);

            const token = getToken();

            if (token) {
                decoded = jwt_decode(token!);
            };

            if (contact.id && informationOwner === 'contact') {
                const response = await api.post(`/information/contacts/${contact.id}`, {
                    ...data
                });

                toast.success("A informação de contato foi adicionada", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    
                }, );

                setTimeout(() => {
                    setSuccessful(!successful);
                    setLoading(false);

                    setReload(!reload);
                }, 500);
                return response.data
            }

            if(informationOwner === 'client'){
                const response = await api.post(`/information/clients/${decoded.sub}`, {
                    ...data
                });

                toast.success("A informação de contato foi adicionada", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    
                }, );

                setTimeout(() => {
                    console.log(response.data);
    
                    setLoading(false);
                    setReload(!reload);
                }, 500);
                return response.data
            }


        } catch (error) {
            if(error instanceof AxiosError){
				setLoading(false);
				toast.error(error.response?.data.message, {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
					
				  }, );

				error.response?.status === 500 && setTimeout(() => {
	
					logout()
					navigate('/error', {replace: true});
	
				}, 500);
			}

        };
    };
    const deleteInformation = async (informationId: string) => {

        try {
            setLoading(true);

            const token = getToken();

            if (token) {
                decoded = jwt_decode(token!);
            };

            if (contact.id && informationOwner === 'contact') {

                const response = await api.delete(`/information/${informationId}/contacts/${contact.id}`);

                toast.success("A informação de contato foi deletata.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    
                }, );

                setTimeout(() => {

                    setLoading(false);
                    getOneContactByClient(contact.id)

                    return response.data
                }, 500);
            }

            if(informationOwner === 'client'){
                const response = await api.delete(`/information/${informationId}/clients/${decoded.sub}`);

                toast.success("A informação de contato foi deletada.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    
                }, );
                setTimeout(() => {
                    setLoading(false);
                    setReload(!reload)
    
                }, 500);
                
                return response.data
            }


        } catch (error) {
            if(error instanceof AxiosError){
				setLoading(false);
				toast.error(error.response?.data.message, {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
					
				  }, );

				error.response?.status === 500 && setTimeout(() => {
	
					logout()
					navigate('/error', {replace: true});
	
				}, 500);
			}
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