import { createContext, useContext, useState } from 'react';
import { Props } from '../interfaces/contexts.interface';
import { MatrixProviderData } from '../interfaces/contexts.interface';

const Context = createContext<MatrixProviderData>({} as MatrixProviderData)

const MatrixProvider = ({ children }: Props) => {
	const [ reload, setReload] = useState<boolean>(false);
	const [isStopped, ] = useState<boolean>(false);
    const [ isPaused,  ] = useState<boolean>(false);

	return (
		<Context.Provider value={{
			setReload,
			reload,
			isPaused, 
			isStopped,
		}}>
			{children}
		</Context.Provider>
	);
};

export default MatrixProvider;
export const MatrixContext = () => useContext(Context)