import fileDownload from 'js-file-download';
import jwt_decode, { JwtPayload } from "jwt-decode";
import { createContext, useContext } from 'react';
import { api } from '../../api';
import { Props, ReportContactsProviderData } from '../../interfaces/contexts.interface';
import { getToken } from '../session/auth';

const Context = createContext<ReportContactsProviderData>({} as ReportContactsProviderData)

const ReportProvider = ({ children }: Props) => {

	const createReportContacts = async () => {
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
			const response = await api.get(`/clients/${decoded.sub}/report/`,{
				responseType: 'arraybuffer'
			})

			return fileDownload(response.data, 'Report.pdf')

		} catch (error) {
			console.log(error);

		};
	};

	return (
		<Context.Provider value={{
			createReportContacts
		}}>
			{children}
		</Context.Provider>
	);
};

export default ReportProvider;
export const ReportContext = () => useContext(Context)