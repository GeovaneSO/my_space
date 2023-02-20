import { createContext, useContext, useState } from 'react';
import { MatrixProviderData, Props } from '../interfaces/contexts.interface';
import { TaskResponse } from '../interfaces/task.interface';

const Context = createContext<MatrixProviderData>({} as MatrixProviderData)

const MatrixProvider = ({ children }: Props) => {
	const [reload, setReload] = useState<boolean>(false);
	const [isStopped,] = useState<boolean>(false);
	const [isPaused,] = useState<boolean>(false);
	const [filePath, setFilePath] = useState<string>('');
	const [successful, setSuccessful] = useState<boolean>(false)
	const [tasks, setTasks] = useState<TaskResponse[]>([])
    const [ loading, setLoading ] = useState<boolean>(false);
	const [oneTask, setOneTask] = useState<TaskResponse>({} as TaskResponse)
	const [informationOwner, setInformationOwner] = useState<string>('')
	return (
		<Context.Provider value={{
			setReload,
			setFilePath,
			setSuccessful,
			setTasks,
			setLoading,
			setOneTask,
			setInformationOwner,
			informationOwner,
			oneTask,
			loading,
			tasks,
			successful,
			filePath,
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