import { AxiosError } from 'axios';
import fileDownload from 'js-file-download';
import jwt_decode, { JwtPayload } from "jwt-decode";
import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api';
import { Props, ReportContactsProviderData } from '../../interfaces/contexts.interface';
import { MatrixContext } from '../matrix.context';
import { getToken, logout } from '../session/auth';
import { toast } from 'react-toastify';

const Context = createContext<ReportContactsProviderData>({} as ReportContactsProviderData)

const ReportProvider = ({ children }: Props) => {
	const { setLoading } = MatrixContext();
	const navigate = useNavigate();

	const createReportContacts = async () => {
		setLoading(true);
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

			const response = await api.get(`/clients/${decoded.sub}/report/`, {
				responseType: 'arraybuffer'
			});

			toast.info("Seu relatório de contatos foi gerado com sucesso!", {
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
				return fileDownload(response.data, 'Report.pdf')
			}, 500);


		} catch (error) {
			if(error instanceof AxiosError){
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
	
				}, 5000);
			}
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