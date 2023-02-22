import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { ContactContext } from "../../../contexts/contact/contact.context";
import { ContactRequest } from "../../../interfaces/contact.interface";
import { updateContactSchema } from "../../../serializers/index";
import { ButtonAdd, ButtonForm } from "../../Button";
import { InputContact } from "../../input/create.contact/create.contact.input";
import { BoxFormInputValue, ContainerForm } from '../../Form/style';
import { BoxButtons, Container } from "./style";
import { BoxTitle, ContainerListInformation } from "../style";
import { MdOutlinePermDeviceInformation } from "react-icons/md";
import { AnimatePresence } from "framer-motion";
import { MatrixContext } from "../../../contexts/matrix.context";


const DetailContact = (): JSX.Element => {

    const { 
        updateContact,
        deleteContact, 
        setOpenDetailContact, 
        openDetailContact, 
        setOpenContactInformation, 
        openContactInformation, 
    } = ContactContext();
    const { setInformationOwner } = MatrixContext()

    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm<ContactRequest>({
        resolver: yupResolver(updateContactSchema),
        defaultValues: { 
            phone: "", 
            avatarUrl: '', 
            email: '',
            name: ''
        }
    });

    return (
        <AnimatePresence>        
            {openDetailContact && 
                <Container
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    onClick={() => setOpenDetailContact(!openDetailContact)}

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
                            <h3>Contato</h3>

                            <div className="box_btns">

                                <ButtonAdd
                                    type="button"
                                    onClick={() => {
                                        setOpenDetailContact(!openDetailContact)
                                        setOpenContactInformation(!openContactInformation)
                                        setInformationOwner('contact')
                                    }}
                                >
                                    <MdOutlinePermDeviceInformation className="svg" />
                                </ButtonAdd>
                                
                                <ButtonAdd
                                    onClick={() => setOpenDetailContact(!openDetailContact)}
                                >
                                    X
                                </ButtonAdd>
                            </div>
                        </BoxTitle>


                    <ContainerForm className='form' onSubmit={handleSubmit(updateContact)}>


                        <BoxFormInputValue className="box_input_value">

                            <InputContact
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

                                <InputContact
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

                                    <ButtonForm
                                        className="delete_btn"
                                        type="button"
                                        onClick={() => deleteContact()}
                                    >
                                        Excluir
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

export { DetailContact };
