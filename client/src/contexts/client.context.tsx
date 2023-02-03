import { createContext, useContext } from 'react'
import { ClientProps, ClientProviderData } from '../interfaces/contexts.interface'

const Context = createContext<ClientProviderData>({} as ClientProviderData)

const ClientProvider = ({ children }: ClientProps) => {

	return (
		<Context.Provider value={{

		}}>
			{children}
		</Context.Provider>
	)
}
export default ClientProvider
export const ClientContext = () => useContext(Context)