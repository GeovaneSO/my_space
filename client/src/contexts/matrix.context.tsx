import { createContext, useContext, useState } from 'react';
import { Props } from '../interfaces/contexts.interface';
import { MatrixProviderData } from '../interfaces/contexts.interface';

const Context = createContext<MatrixProviderData>({} as MatrixProviderData)

const MatrixProvider = ({ children }: Props) => {
	const [ reload, setReload] = useState<boolean>(false);



	return (
		<Context.Provider value={{
			setReload,
			reload,
		}}>
			{children}
		</Context.Provider>
	);
};

export default MatrixProvider;
export const MatrixContext = () => useContext(Context)