import { yupResolver } from '@hookform/resolvers/yup';
import { AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { GrFormClose } from 'react-icons/gr';
import { TaskContext } from '../../../contexts';
import { TaskRequest } from '../../../interfaces/task.interface';
import { createTaskSchema } from '../../../serializers';
import { ButtonAdd, ButtonForm } from '../../Button';
import { BoxFormInputValue, ContainerForm } from '../../Form/style';
import { InputTask } from '../../input';
import { BoxTitle, Container, ContainerListInformation } from '../style';
import { ContainerButton } from './style';


const ModalTask = (): JSX.Element => {

    const { openModalCreateTask, setOpenModalCreateTask, createTaskClient } = TaskContext()

    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm<TaskRequest>({
        resolver: yupResolver(createTaskSchema),
        defaultValues: { 
            title: "", 
            category: '', 
            description: ''
        }
    });
    
    return (
        <AnimatePresence>

      { openModalCreateTask &&
        (<Container
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}

            onClick={() => setOpenModalCreateTask(!openModalCreateTask)}

        >
            {
            <ContainerListInformation
                initial={{scale: 0.5}}
                animate={{
                    scale: 1,
                    transition: { 
                        type: "spring", 
                        stiffness: 30
                    }
                }}
                exit={{scale: 0.5,
                    transition: { 
                        type: "spring", 
                        stiffness: 30
                    }
                }}
                
                onClick={(e) =>  e.stopPropagation()}

            >
                <BoxTitle>
                    <h3>Tarefa</h3>

                    <ButtonAdd
                        onClick={() => setOpenModalCreateTask(!openModalCreateTask)}
                    >
                        <GrFormClose className="svg" />
                    </ButtonAdd>
                </BoxTitle>
                <ContainerForm onSubmit={handleSubmit(createTaskClient)}>
                    <BoxFormInputValue>

                        <InputTask
                            type="text"
                            name="title"
                            id="title"
                            label="Titulo"
                            placeholder="Digitar título"
                            errors={errors}
                            register={register}
                            reset={reset}
                            isSubmitSuccessful={isSubmitSuccessful}
                        />

                        <InputTask
                            type="text"
                            name="description"
                            id="description"
                            label="Descrição"
                            placeholder="Digitar descrição"
                            textarea={true}
                            errors={errors}
                            reset={reset}
                            register={register}
                            isSubmitSuccessful={isSubmitSuccessful}

                        />

                        <InputTask
                            type="text"
                            category={true}
                            name="category"
                            id="category"
                            label="Categoria"
                            placeholder="Digite o link da sua imagem"
                            errors={errors}
                            register={register}
                            reset={reset}
                            isSubmitSuccessful={isSubmitSuccessful}

                        />

                        <ContainerButton>

                            <ButtonForm className="button_add_task" type="submit">
                                Adicionar
                            </ButtonForm>
                        </ContainerButton>
                    </BoxFormInputValue>

                </ContainerForm>


            </ContainerListInformation>}
        </Container>)
      
      }
        </AnimatePresence>
    )
}

export { ModalTask };
