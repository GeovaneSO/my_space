import { AxiosError, AxiosResponse } from 'axios';
import { createContext, useContext } from 'react';
import { api } from '../../api';
import { ClientRequest } from '../../interfaces/client.interface';
import { Props, SessionProviderData } from '../../interfaces/contexts.interface';
import { login } from './auth';
import { useNavigate } from 'react-router-dom';
import { MatrixContext } from '../matrix.context';
import { toast } from 'react-toastify';


const Context = createContext<SessionProviderData>({} as SessionProviderData)

const SessionProvider = ({ children }: Props) => {
	const navigate = useNavigate();
	const { setReload, reload, setLoading } = MatrixContext();


	const createSession = async (data: ClientRequest) => {

		try {
			setLoading(true);

			const response: AxiosResponse<any, any> = await api.post('/auth/login', {
				...data
			});
			
			setTimeout( () => {
				
				const {access_token: token} = response.data;
	
				if (api.defaults.headers != null) {
					api.defaults.headers.common.Authorization =  `Bearer ${token}` 
				};
				
				login(token);
				
				setLoading(false);

				setReload(!reload);	

				navigate('/dashboard', { replace: true });

			}, 500);

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