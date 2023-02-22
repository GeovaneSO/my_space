import axios, { AxiosError } from "axios";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, urlCloudinaryApi } from '../../api';
import { ClientRequest, ClientUpdateRequest, IClient, InformationResponse, ResponseContact } from '../../interfaces/client.interface';
import { ClientProviderData, Props } from '../../interfaces/contexts.interface';
import { ContactContext } from "../contact/contact.context";
import { MatrixContext } from "../matrix.context";
import { getToken, logout } from '../session/auth';

const Context = createContext<ClientProviderData>({} as ClientProviderData)

const ClientProvider = ({ children }: Props) => {
	const navigate = useNavigate();
	const [client, setClient] = useState<IClient>({} as IClient);
	const [openModal, setOpenModal] = useState<boolean>(false)
	const [openModalInformation, setOpenModalInformation] = useState<boolean>(false)
	const [informationByClient, setInformationByClient] = useState<InformationResponse[]>([] as InformationResponse[]);
	const [openModalDetailClient, setOpenModalDetailClient] = useState<boolean>(false)
	
	const { reload, setReload, filePath, setTasks, setLoading, setSuccessful, successful } = MatrixContext();
	const { setContactsByClient } = ContactContext();


	const createClient = async (data: ClientRequest) => {
		try {
			setLoading(true);
			const formData = new FormData();
			formData.append('file', filePath);
			formData.append('upload_preset', 'tqned5se');

			const responseCloudinary = await axios.post(urlCloudinaryApi, formData)
			
	
			await api.post('/clients/', {
				...data, avatarUrl: responseCloudinary.data.url
			});

			setTimeout( () => {
				
				setLoading(false);
	
				navigate('/', { replace: true });

			}, 2000);
			

		} catch (error) {
			if(error instanceof AxiosError){
				error.response?.status === 500 && setTimeout(() => {
	
					logout()
					navigate('/error', {replace: true});
	
				}, 3000);
			}

		};
	};

	const getOneClient = async () => {
		let decoded: JwtPayload = {
			exp: 1,
			iat: 1,
			sub: 'error',
		};

		try {
			const token = getToken();

			if (token) {
				decoded = jwt_decode(token!);
			};

			const response = await api.get(`/clients/${decoded.sub}`);

			setClient(response.data);

		} catch (error) {
			console.log(error);
		};
	};

	const updateClient = async (data: ClientUpdateRequest) => {
		try {
			setLoading(true);

			let decoded: JwtPayload = {
				exp: 1,
				iat: 1,
				sub: 'error',
			};

			const token = getToken();

			if (token) {
				decoded = jwt_decode(token!);
			};

			const formData = new FormData();

			formData.append('file', filePath);
			formData.append('upload_preset', 'tqned5se')
	
			if(filePath){

				const responseCloudinary = await axios.post(urlCloudinaryApi, formData)
		
				
				const response = await api.patch(`/clients/${decoded.sub}`, {
					...data, avatarUrl: responseCloudinary.data.url
					
				});

				setTimeout( () => {
				
					setLoading(false);
					setClient(response.data);
					setReload(!reload);
					setSuccessful(!successful);

				}, 2000);

				return response.data
				
			}

			const response = await api.patch(`/clients/${decoded.sub}`, {
				...data, avatarUrl: 'found'	
			});

			setTimeout( () => {
				
				setLoading(false);
				setClient(response.data);
				setReload(!reload);
				setSuccessful(!successful);
				
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

	const deleteClient = async () => {
		let decoded: JwtPayload = {
			exp: 1,
			iat: 1,
			sub: 'error',
		};
		try {
			const token = getToken();

			if (token) {
				decoded = jwt_decode(token!);
			};

			await api.delete(`/clients/${decoded.sub}`);

			logout()

			navigate('/', { replace: true });

		} catch (error) {
			if(error instanceof AxiosError){
				error.response?.status === 500 && setTimeout(() => {
	
					logout()
					navigate('/error', {replace: true});
	
				}, 5000);
			}
		};
	};

	const loading = async (decoded: JwtPayload) => {
		try {
			const response: IClient = await (await api.get(`/clients/${decoded.sub}`)).data;

			setClient(response);

			const contacts: ResponseContact[] = response!.contacts
			const information = response.contactInformations
			const tasks = response.tasks

			setContactsByClient(contacts)
			information && setInformationByClient(information)

			tasks && setTasks(response.tasks)
			
		} catch (error) {
			if (error instanceof AxiosError) {
				logout();
				navigate('/', { replace: true })
			};
		};
	};

	useEffect(() => {
		let decoded: JwtPayload = {
			exp: 1,
			iat: 1,
			sub: 'error',
		};
		const token = getToken();

		if (token) {
			decoded = jwt_decode(token!);
		};
		loading(decoded);

	}, [, reload]);

	return (
		<Context.Provider value={{
			createClient,
			getOneClient,
			updateClient,
			deleteClient,
			setInformationByClient,
			setOpenModalInformation,
			setOpenModal,
			setOpenModalDetailClient,
			navigate,
			openModalDetailClient,
			openModalInformation,
			openModal,
			informationByClient,
			client,
		}}>
			{children}
		</Context.Provider>
	);
};

export default ClientProvider;
export const ClientContext = () => useContext(Context)