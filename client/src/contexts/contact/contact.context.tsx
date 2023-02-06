import jwt_decode, { JwtPayload } from "jwt-decode";
import { createContext, useContext, useState } from 'react';
import api from '../../api';
import { ResponseContact } from "../../interfaces/client.interface";
import { ContactRequest, ContactUpdateRequest, IContact } from '../../interfaces/contact.interface';
import { ContactProviderData, Props } from '../../interfaces/contexts.interface';
import { MatrixContext } from "../matrix.context";
import { getToken } from '../session/auth';

const Context = createContext<ContactProviderData>({} as ContactProviderData)

const ContactProvider = ({ children }: Props) => {
	const [contactsByClient, setContactsByClient] = useState<ResponseContact[]>([] as ResponseContact[]);
	const [contact, setContact] = useState<IContact>({} as IContact);
	const [openCreateContact, setOpenCreateContact] = useState<boolean>(false)
	const [openDetailContact, setOpenDetailContact] = useState<boolean>(false)
	const [openContactInformation, setOpenContactInformation] = useState<boolean>(false)
	const { reload, setReload } = MatrixContext();

	let decoded: JwtPayload = {
		exp: 1,
		iat: 1,
		sub: 'error',
	};

	const createContact = async (data: ContactRequest) => {
		try {
			const token = getToken();

			console.log(data);
			if (token) {
				decoded = jwt_decode(token!);
			};

			const response = await api.post(`/contacts/clients/${decoded.sub}`, {
				...data
			});

			setContact(response.data);
			setReload()

		} catch (error) {
			console.log(error);
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

			console.log(contact);
			return response

		} catch (error) {
			console.log(error);
		}
	}

	const updateContact = async (data: ContactUpdateRequest) => {
		try {
			const token = getToken();

			if (token) {
				decoded = jwt_decode(token!);
			};

			const response = await api.patch(`/contacts/${contact.id}/clients/${decoded.sub}`, {
				...data
			});

			setReload(!reload);

			setContact(response.data);
			setOpenDetailContact(!openDetailContact)

		} catch (error) {
			console.log(error);

		}
	}
	const deleteContact = async () => {
		try {
			const token = getToken();

			if (token) {
				decoded = jwt_decode(token!);
			};

			const response = await api.delete(`/contacts/${contact.id}/clients/${decoded.sub}`);
			console.log(response)
			setReload(!reload)
			setOpenDetailContact(!openDetailContact)
		} catch (error) {
			console.log(error);

		}
	}

	function openModalDetail(contactId: string) {
		const findContact = contactsByClient.find((contact) => contact.id === contactId);

		if (findContact) {
			getOneContactByClient(findContact.id)
		}
		// setContact(findContact);
		console.log(contact);

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