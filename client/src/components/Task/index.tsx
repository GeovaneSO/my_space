import { ClientContext, TaskContext } from '../../contexts';
import { MatrixContext } from '../../contexts/matrix.context';
import { ButtonModal } from '../Button';
import { ListTask } from '../List/index';
import { Columns, Container, ContainerBtns, ContainerHeader, ContainerList, ContainerMain, ContainerSubtitle, SubtitleContent } from './style';
import svgTask from '../../utils/img/56438-man-with-task-list.json'
import Lottie from "react-lottie";
import { SvgContainer } from './style';

const Task = (): JSX.Element => {
    const { openModalCreateTask, setOpenModalCreateTask } = TaskContext()
    const { client } = ClientContext()
    const { tasks, setTasks, isPaused, isStopped, } = MatrixContext()
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: svgTask,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    };
    return (
        <Container>
            <ContainerHeader>
                <h3>Tarefas</h3>
                <ContainerBtns>
                    <ButtonModal
                        className='btn'
                        onClick={
                            () => setTasks(client.tasks)
                        }
                    >
                        Todos
                    </ButtonModal>
                    <ButtonModal
                        className='btn'
                        onClick={
                            () => {
                                setTasks(tasks.filter((task) => {
                                    return task.status === true
                                }))
                            }
                        }
                    >
                        Concluídos
                    </ButtonModal>
                    <ButtonModal
                        className='btn'
                        onClick={
                            () => setOpenModalCreateTask(!openModalCreateTask)
                        }
                    >
                        Criar
                    </ButtonModal>
                </ContainerBtns>
            </ContainerHeader>
            <ContainerMain>
                <ContainerSubtitle>
                    <SubtitleContent className='box-1'>
                        <Columns>
                            <p>Status</p>

                        </Columns>
                        <Columns>
                            <p>Título</p>
                        </Columns>
                    </SubtitleContent>

                    <SubtitleContent className='box-2'>
                        <Columns>
                            <p>Descrição</p>
                        </Columns>
                        <div className='box-2-content'>

                            <Columns>
                                <p>Categoria</p>
                            </Columns>

                            <Columns>
                                <p>Editar</p>
                            </Columns>
                        </div>
                    </SubtitleContent>
                </ContainerSubtitle>
                <ContainerList>
                    {
                        tasks && tasks.length > 0 ? tasks.map((task) => (
                            <ListTask
                                key={task.id}
                                category={task.category.name}
                                description={task.description}
                                title={task.title}
                                id={task.id}
                                status={task.status}
                            />

                        ))
                            :  <SvgContainer>
                            <Lottie
                                options={defaultOptions}
                                isStopped={isStopped}
                                isPaused={isPaused}
                            />
                        </SvgContainer>
                    }
                </ContainerList>
            </ContainerMain>
        </Container >
    )
}

export { Task };
