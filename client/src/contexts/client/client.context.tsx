import { AxiosError } from "axios";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { ClientRequest, ClientUpdateRequest, IClient, InformationResponse, ResponseContact } from '../../interfaces/client.interface';
import { ClientProviderData, Props } from '../../interfaces/contexts.interface';
import { ContactContext } from "../contact/contact.context";
import { MatrixContext } from "../matrix.context";
import { getToken, logout } from '../session/auth';

const Context = createContext<ClientProviderData>({} as ClientProviderData)

const ClientProvider = ({ children }: Props) => {
	const navigate = useNavigate();
	const [ client, setClient] = useState<IClient>({} as IClient);
	const [ openModal, setOpenModal ] = useState<boolean>(false)
	const [ informationByClient, setInformationByClient ] = useState<InformationResponse[]>([] as InformationResponse[]);
	
	const { reload, setReload } = MatrixContext();
	const { setContactsByClient } = ContactContext()
	
	const createClient = async (data: ClientRequest) => {
		try {
			await api.post('/clients/', {
				...data
			});

			navigate('/', { replace: true });

		} catch (error) {
			console.log(error);

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

			const response = await api.patch(`/clients/${decoded.sub}`, {
				...data
			});

			setClient(response.data);
			setReload(!reload);

		} catch (error) {
			console.log(error);
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
			if ( error instanceof AxiosError){
				console.log(error);

			}
		};
	};
	
	const loading = async (decoded: JwtPayload) => {
		try {
			const response: IClient = await (await api.get(`/clients/${decoded.sub}`)).data;
			
			setClient(response);
			const contacts: ResponseContact[] = response!.contact
			const information = response.contactInformation

			information && setInformationByClient(information)
			
			setContactsByClient(contacts)

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
			setOpenModal,
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