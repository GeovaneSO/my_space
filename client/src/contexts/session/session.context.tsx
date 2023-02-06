import { AxiosError, AxiosResponse } from 'axios';
import { createContext, useContext } from 'react';
import api from '../../api';
import { ClientRequest } from '../../interfaces/client.interface';
import { Props, SessionProviderData } from '../../interfaces/contexts.interface';
import { login } from './auth';
import { useNavigate } from 'react-router-dom';
import { MatrixContext } from '../matrix.context';


const Context = createContext<SessionProviderData>({} as SessionProviderData)

const SessionProvider = ({ children }: Props) => {
	const navigate = useNavigate();
	const { setReload, reload } = MatrixContext()

	const createSession = async (data: ClientRequest) => {

		try {
			const response: AxiosResponse<any, any> = await api.post('/auth/login', {
				...data
			});
		
			const {access_token: token} = response.data;

			if (api.defaults.headers != null) {
				api.defaults.headers.common.Authorization =  `Bearer ${token}` 
			};

			login(token);
			setReload(!reload)		
			navigate('/dashboard', { replace: true });

		} catch (error) {
			if (error instanceof AxiosError) {

				console.log(error.response?.data);
			};
		};
	};
	const logout = () => {
		localStorage.removeItem('TOKEN_KEY');
		navigate('/', { replace: true });
	  };

	return (
		<Context.Provider value={{
			createSession,
			logout,
		}}>
			{children}
		</Context.Provider>
	);
};

export default SessionProvider;
export const SessionContext = () => useContext(Context);