import axios, { AxiosError } from "axios";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { createContext, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { api, urlCloudinaryApi } from '../../api';
import { ResponseContact } from "../../interfaces/client.interface";
import { ContactRequest, ContactUpdateRequest, IContact } from '../../interfaces/contact.interface';
import { ContactProviderData, Props } from '../../interfaces/contexts.interface';
import { MatrixContext } from "../matrix.context";
import { getToken, logout } from '../session/auth';

const Context = createContext<ContactProviderData>({} as ContactProviderData)

const ContactProvider = ({ children }: Props) => {
	const [contactsByClient, setContactsByClient] = useState<ResponseContact[]>([] as ResponseContact[]);
	const [contact, setContact] = useState<IContact>({} as IContact);
	const [openCreateContact, setOpenCreateContact] = useState<boolean>(false)
	const [openDetailContact, setOpenDetailContact] = useState<boolean>(false)
	const [openContactInformation, setOpenContactInformation] = useState<boolean>(false)
	const navigate = useNavigate();

	const { reload, setReload, filePath, setLoading, setSuccessful, successful } = MatrixContext();

	let decoded: JwtPayload = {
		exp: 1,
		iat: 1,
		sub: 'error',
	};

	const createContact = async (data: ContactRequest) => {
		try {
			setLoading(true);
			setOpenCreateContact(!openCreateContact)
			const token = getToken();

			if (token) {
				decoded = jwt_decode(token!);
			};
						
			const formData = new FormData()
			formData.append('file', filePath)
			formData.append('upload_preset', 'tqned5se')
			
			if (filePath){
				let responseCloudinary = await axios.post(urlCloudinaryApi, formData)
				
				const response = await api.post(`/contacts/clients/${decoded.sub}`, {
					...data, avatarUrl: responseCloudinary.data.url
				});

				setTimeout( () => {
				
					setLoading(false);
					setContact(response.data);
					setSuccessful(!successful);
					setReload(!reload);
					return response.data;

				}, 2000);

			}

			const response = await api.post(`/contacts/clients/${decoded.sub}`, {
				...data, avatarUrl: 'found'
			});

			setTimeout( () => {
				
				setLoading(false);
				setContact(response.data);
				setSuccessful(!successful)
				setReload(!reload);

			}, 2000);

		} catch (error) {
			if(error instanceof AxiosError){
				error.response?.status === 500 && setTimeout(() => {
	
					logout()
					navigate('/error', {replace: true});
	
				}, 5000);
			}
		};
	};

	const getAllContactsByClient = async () => {
		try {
			const token = getToken();

			if (token) {
				decoded = jwt_decode(token!);
			};

			const response = await api.get(`/contacts/clients/${decoded.sub}`);

			setContactsByClient(response.data)

		} catch (error) {
			console.log(error);
		}
	}

	const getOneContactByClient = async (contactId: string) => {
		try {
			const token = getToken();

			if (token) {
				decoded = jwt_decode(token!);
			};

			const response = await api.get(`/contacts/${contactId}/clients/${decoded.sub}`);

			setContact(response.data);

			return response

		} catch (error) {
			console.log(error);
		}
	}

	const updateContact = async (data: ContactUpdateRequest) => {
		try {
			setLoading(true);
			setOpenDetailContact(!openDetailContact)
			const token = getToken();

			if (token) {
				decoded = jwt_decode(token!);
			};

			const formData = new FormData()
			formData.append('file', filePath)
			formData.append('upload_preset', 'tqned5se')
			
			if (filePath){
				let responseCloudinary = await axios.post(urlCloudinaryApi, formData)
				
				const response = await api.post(`/contacts/clients/${decoded.sub}`, {
					...data, avatarUrl: responseCloudinary.data.url
				});
				
				setTimeout( () => {
				
					setLoading(false);
					setContact(response.data);
					setSuccessful(!successful);
					setReload(!reload);
					return response.data;

				}, 2000);

			}

			const response = await api.patch(`/contacts/${contact.id}/clients/${decoded.sub}`, {
				...data, avatarUrl: 'found'
			});
			
			setTimeout( () => {
				
				setLoading(false);
				setReload(!reload);
				setSuccessful(!successful)
				setContact(response.data);
			}, 2000);

		} catch (error) {
			if(error instanceof AxiosError){
				error.response?.status === 500 && setTimeout(() => {
	
					logout()
					navigate('/error', {replace: true});
	
				}, 5000);
			}

		}
	}
	const deleteContact = async () => {
		try {
			setLoading(true);
			setOpenDetailContact(!openDetailContact)
			const token = getToken();

			if (token) {
				decoded = jwt_decode(token!);
			};

			await api.delete(`/contacts/${contact.id}/clients/${decoded.sub}`);
			
			setTimeout( () => {
				
				setLoading(false);
				setReload(!reload)

			}, 2000);

		} catch (error) {
			if(error instanceof AxiosError){
				error.response?.status === 500 && setTimeout(() => {
	
					logout()
					navigate('/error', {replace: true});
	
				}, 5000);
			}
		}
	}

	function openModalDetail(contactId: string) {
		const findContact = contactsByClient.find((contact) => contact.id === contactId);

		if (findContact) {
			getOneContactByClient(findContact.id)
		}

		setOpenDetailContact(!openDetailContact);
	};

	return (
		<Context.Provider value={{
			createContact,
			getAllContactsByClient,
			getOneContactByClient,
			updateContact,
			deleteContact,
			setContactsByClient,
			setOpenCreateContact,
			setOpenDetailContact,
			openModalDetail,
			setOpenContactInformation,
			openContactInformation,
			openDetailContact,
			openCreateContact,
			contactsByClient,
			contact,
		}}>
			{children}
		</Context.Provider>
	);

};

export default ContactProvider;
export const ContactContext = () => useContext(Context)