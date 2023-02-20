import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { GrFormClose } from "react-icons/gr";
import { ContactContext } from "../../../contexts/contact/contact.context";
import { ContactRequest } from "../../../interfaces/contact.interface";
import { contactFormSchema } from "../../../serializers/index";
import { ButtonAdd, ButtonForm } from "../../Button";
import { BoxFormInputValue } from '../../Form/style';
import { InputContact } from "../../input/create.contact/create.contact.input";
import { ContainerListInformation, ContainerForm, ContainerButton } from "./style";
import { Container, BoxTitle } from "../style";
import { AnimatePresence } from "framer-motion";

const CreateContact = () => {
    const { createContact, setOpenCreateContact, openCreateContact } = ContactContext();

    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm<ContactRequest>({
        resolver: yupResolver(contactFormSchema),
        defaultValues: { 
            phone: "", 
            avatarUrl: '', 
            email: '',
            name: ''
        }
    });

    return (
        <AnimatePresence>
            {openCreateContact &&
                <Container
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    onClick={() => setOpenCreateContact(!openCreateContact)}

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

                            <ButtonAdd
                                onClick={() => setOpenCreateContact(!openCreateContact)}
                            >
                                <GrFormClose className="svg" />
                            </ButtonAdd>
                        </BoxTitle>

                        <ContainerForm className='form' onSubmit={handleSubmit(createContact)}>

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

                                <InputContact
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

                                <ContainerButton>
                                    <ButtonForm className="button_register" type="submit">
                                        Adicione seu contato
                                    </ButtonForm>

                                </ContainerButton>
                            </BoxFormInputValue>
                        </ContainerForm>
                    </ContainerListInformation>
                </Container>
            }
        </AnimatePresence>
    );
};

export { CreateContact };
