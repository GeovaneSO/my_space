import { AxiosError } from 'axios';
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api';
import { Props, TaskClientProviderData } from '../../interfaces/contexts.interface';
import { TaskRequest, TaskUpdateRequest } from "../../interfaces/task.interface";
import { MatrixContext } from "../matrix.context";
import { logout } from '../session/auth';
import { toast } from 'react-toastify';

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

			toast.success("Foi criada uma tarefa com sucesso!", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",				
			}, );


			setTimeout( () => {

				setLoading(false);
				setReload(!reload);
				setSuccessful(!successful)
				
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

	const handleChecked = async (event: boolean, id: string) => {

		try {

			await api.patch(`/tasks/${id}`, {
				status: event
			});

			toast.success("Sua tarefa foi concluída, parabéns!", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			}, );


			setReload(!reload);

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


	const updateTask = async (data:TaskUpdateRequest) => {
		try {
			setLoading(true);

			await api.patch(`/tasks/${oneTask.id}`, {
				...data
			});

			toast.success("A tarefa foi atualizada com sucesso!", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
				
			}, );

			setTimeout( () => {
				
				setLoading(false);
				setReload(!reload);
				setSuccessful(!successful);

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
	}
	
	const deleteTask = async () => {
		try {
			setLoading(true);

			await api.delete(`/tasks/${oneTask.id}`);

			toast.success("A tarefa foi deletada com sucesso!", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
				
			}, );

			
			setTimeout( () => {
				
				setLoading(false);
				setReload(!reload);
				setOpenModalDetailTask(!openModalDetailTask)
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