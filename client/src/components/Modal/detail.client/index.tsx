import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { GrFormClose } from "react-icons/gr";
import { updateClientSchema } from "../../../serializers/index";
import { ButtonAdd, ButtonForm } from "../../Button";
import { InputRegister } from "../../input";
import { BoxFormInputValue, ContainerForm } from '../../Form/style';
import { BoxButtons, Container } from "./style";
import { BoxTitle, ContainerListInformation } from "../style";
import { ClientRequest } from "../../../interfaces/client.interface";
import { ClientContext } from "../../../contexts";
import { AnimatePresence } from "framer-motion";
import { FaTrash } from "react-icons/fa";


const DetailClient = (): JSX.Element => {
    
    const { client, setOpenModalDetailClient, openModalDetailClient, updateClient, deleteClient } = ClientContext()
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm<ClientRequest>({
        resolver: yupResolver(updateClientSchema),
        defaultValues: { 
            avatarUrl: '', 
            name: '',
            password: '',
        }
    });

    return (
        <AnimatePresence>
            {openModalDetailClient &&
                <Container
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    onClick={() => setOpenModalDetailClient(!openModalDetailClient)}
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
                            <h3>{client.name}</h3>

                            <div className="box_btns">
                            <ButtonAdd className="button_delete" type="button"
                                    onClick={() => deleteClient()}
                                >
                                    <FaTrash />
                                </ButtonAdd>
                                <ButtonAdd
                                    onClick={() => setOpenModalDetailClient(!openModalDetailClient)}
                                >
                                    <GrFormClose className="svg" />
                                </ButtonAdd>
                            </div>
                        </BoxTitle>


                        <ContainerForm className='form' onSubmit={handleSubmit(updateClient)}>


                            <BoxFormInputValue className="box_input_value">

                                <InputRegister
                                    type="text"
                                    name="name"
                                    id="name"
                                    label="Nome completo"
                                    placeholder="João Barbosa Cardoso"
                                    errors={errors}
                                    register={register}
                                    reset={reset}
                                    isSubmitSuccessful={isSubmitSuccessful}

                                />

                                <InputRegister
                                    type="password"
                                    name="password"
                                    id="password"
                                    label="Senha"
                                    placeholder="Digite seu senha aqui"
                                    errors={errors}
                                    register={register}
                                    reset={reset}
                                    isSubmitSuccessful={isSubmitSuccessful}

                                />

                                <InputRegister
                                    children={true}
                                    type="file"
                                    name="avatarUrl"
                                    id="avatarUrl"
                                    label="Imagem de usuário"
                                    placeholder="Digite o link da sua imagem"
                                    errors={errors}
                                    register={register}
                                    reset={reset}
                                    isSubmitSuccessful={isSubmitSuccessful}
                                />
                                
                                <BoxButtons>
                                    <ButtonForm className="button_update" type="submit">
                                        Atualize seu contato
                                    </ButtonForm>

                                </BoxButtons>
                            </BoxFormInputValue>
                        </ContainerForm>
                    </ContainerListInformation>
                </Container>
            }
        </AnimatePresence>
    );
};

export { DetailClient };
