import { GrFormClose } from "react-icons/gr";
import { FaTrash } from "react-icons/fa";
import { ButtonAdd } from "../../Button";
import { Container, BoxContentTask } from "./style";
import { BoxTitle, ContainerListInformation } from "../style";
import { TaskContext } from "../../../contexts";
import { AnimatePresence } from "framer-motion";
import { MatrixContext } from "../../../contexts/matrix.context";

const DetailTask = (): JSX.Element => {
    
    const { openModalDetailTask, setOpenModalDetailTask, deleteTask } = TaskContext();
    const { oneTask } = MatrixContext();

    return (
        <AnimatePresence>
            {openModalDetailTask &&
                <Container
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    onClick={() => setOpenModalDetailTask(!openModalDetailTask)}
                >
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
                            <h3>{oneTask.title}</h3>

                            <div className="box_btns">
                                
                                <ButtonAdd className="button_delete" type="button"
                                    onClick={() => deleteTask()}
                                >
                                    <FaTrash />
                                </ButtonAdd>
                                
                                <ButtonAdd
                                    onClick={() => setOpenModalDetailTask(!openModalDetailTask)}
                                >
                                    <GrFormClose className="svg" />
                                </ButtonAdd>

                            </div>
                        </BoxTitle>
                        <BoxContentTask>
                            <div className="box_description">
                                <span>Descrição:</span>
                                <p>{oneTask.description}</p>

                            </div>
                            <div>
                                <span>Categoria:</span>
                                <p>{oneTask.category.name}</p>

                            </div>
                            <div>
                                <span>Status:</span>
                                {oneTask.status ? <p>Tarefa finalizada</p>: <p>Tarefa pendente</p>}

                            </div>
                            <div>
                                <span>Data de criação:</span>
                                <p>{`${oneTask.create_at.toString().slice(8,10)}${oneTask.create_at.toString().slice(4,7)}-${oneTask.create_at.toString().slice(0,4)}`} às {oneTask.create_at.toString().slice(12,19)}</p>

                            </div>
                        </BoxContentTask>
                    </ContainerListInformation>
                </Container>
            }
        </AnimatePresence>
    );
};

export { DetailTask };
