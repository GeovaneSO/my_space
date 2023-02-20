import { AxiosError } from 'axios';
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api';
import { Props, TaskClientProviderData } from '../../interfaces/contexts.interface';
import { TaskRequest, TaskUpdateRequest } from "../../interfaces/task.interface";
import { MatrixContext } from "../matrix.context";
import { logout } from '../session/auth';

const Context: React.Context<TaskClientProviderData> = createContext<TaskClientProviderData>({} as TaskClientProviderData)

const TaskProvider = ({ children }: Props) => {
	const [openModalCreateTask, setOpenModalCreateTask, ] = useState<boolean>(false);
	const [openModalDetailTask, setOpenModalDetailTask] = useState<boolean>(false);

	const { reload, setReload, successful, setSuccessful, setLoading, tasks, setOneTask, oneTask } = MatrixContext();
	
	const navigate = useNavigate();

	const createTaskClient = async (data: TaskRequest) => {
		try {
			setOpenModalCreateTask(!openModalCreateTask)
			setLoading(true);
			
			await api.post(`/tasks/`, {
				...data
			});

			setTimeout( () => {

				setLoading(false);
				setReload(!reload);
				setSuccessful(!successful)
				
			}, 2000);

		} catch (error) {
			if(error instanceof AxiosError){
				error.response?.status === 500 && setTimeout(() => {
	
					logout()
					navigate('/error', {replace: true});
	
				}, 5000);
			}

		};
	};

	const handleChecked = async (event: boolean, id: string) => {

		try {

			const response = await api.patch(`/tasks/${id}`, {
				status: event
			})

			setReload(!reload);
			console.log(response.data)

		} catch (error) {
			console.log(error);

		};
	};

	const updateTask = async (data:TaskUpdateRequest) => {
		try {
			setLoading(true);

			await api.patch(`/tasks/${oneTask.id}`, {
				...data
			});

			setTimeout( () => {
				
				setLoading(false);
				setReload(!reload);
				setSuccessful(!successful);

			}, 2000);
		} catch (error) {
			
		}
	}
	const deleteTask = async () => {
		try {
			setLoading(true);

			await api.delete(`/tasks/${oneTask.id}`);
			
			setTimeout( () => {
				
				setLoading(false);
				setReload(!reload);
				setOpenModalDetailTask(!openModalDetailTask)
			}, 500);
		} catch (error) {
			
		}
	}

	const openModalDetail = (taskId: string) => {
		const task = tasks.find((task) => task.id === taskId);

		if (task){
			setOneTask(task);
			setOpenModalDetailTask(!openModalDetailTask)
		}		
	}

	return (
		<Context.Provider
			value={{
				createTaskClient,
				handleChecked,
				updateTask,
				deleteTask,
				setOpenModalCreateTask,
				openModalDetail,
				setOpenModalDetailTask,
				openModalDetailTask,
				openModalCreateTask,
				successful, 
				setSuccessful
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default TaskProvider;
export const TaskContext = () => useContext(Context)