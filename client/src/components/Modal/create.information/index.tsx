import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { GrFormClose } from "react-icons/gr";
import { InformationContext } from "../../../contexts/information/information.context";
import { InformationRequest } from "../../../interfaces/information.interface";
import { InformationSchema } from "../../../serializers/index";
import { ButtonForm, ButtonAdd } from "../../Button";
import { InputInformation } from "../../input";
import { BoxFormInputValue } from '../../Form/style';
import { ContainerListInformation, Container } from "../style";
import { ContainerForm, BoxTitle } from './style'
import { AnimatePresence } from "framer-motion";

const CreateInformationModal = () => {

    const { createInformationByClient, createInformationModal, setCreateInformationModal, } = InformationContext();

    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm<InformationRequest>({
        resolver: yupResolver(InformationSchema),
        defaultValues: { 
            phone: "", 
            email: '',
        }
    });

    return (
        <AnimatePresence>
            { createInformationModal && 
                <Container
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    onClick={() => setCreateInformationModal(!createInformationModal)}

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

                            <h3>Adicione mais uma informação para contato</h3>
                            <ButtonAdd
                                className="box_btn"
                                onClick={() => setCreateInformationModal(!createInformationModal)}
                            >
                                <GrFormClose className="svg"/>
                            </ButtonAdd>

                        </BoxTitle>
                        <ContainerForm className='form' onSubmit={handleSubmit(createInformationByClient)}>

                            <BoxFormInputValue>
                                <InputInformation
                                    type="text"
                                    name="email"
                                    id="email"
                                    label="Endereço de email"
                                    placeholder="yourname@email.com"
                                    errors={errors}
                                    register={register}
                                    reset={reset}
                                    isSubmitSuccessful={isSubmitSuccessful}
                                />

                                <InputInformation
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    label="Número de telefone"
                                    placeholder="73977778888"
                                    errors={errors}
                                    register={register}
                                    reset={reset}
                                    isSubmitSuccessful={isSubmitSuccessful}
                                />

                                <ButtonForm className="button_register" type="submit">
                                    Adicionar
                                </ButtonForm>
                            </BoxFormInputValue>
                        </ContainerForm>
                    </ContainerListInformation>

                </Container>
            }       
        </AnimatePresence>
    );
};

export { CreateInformationModal };
