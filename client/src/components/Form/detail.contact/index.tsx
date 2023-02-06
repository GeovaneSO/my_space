import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { GrFormClose } from "react-icons/gr";
import { ContactContext } from "../../../contexts/contact/contact.context";
import { ContactRequest } from "../../../interfaces/contact.interface";
import { updateContactSchema } from "../../../serializers/index";
import { ButtonAdd, ButtonForm } from "../../Button";
import { InputContact } from "../../input/create.contact/create.contact.input";
import { BoxFormInputValue, ContainerForm } from '../style';
import { BoxButtons, ContainerModal } from "./style";

const DetailContact = () => {

    const { updateContact, deleteContact, setOpenDetailContact, openDetailContact } = ContactContext();

    const { register, handleSubmit, formState: { errors } } = useForm<ContactRequest>({
        resolver: yupResolver(updateContactSchema)
    });

    return (
        <ContainerModal>

            <ContainerForm className='form' onSubmit={handleSubmit(updateContact)}>

                <div className="box_title">
                    <h3>Contato</h3>
                    <ButtonAdd
                        onClick={() => setOpenDetailContact(!openDetailContact)}
                    >
                        <GrFormClose className="svg" />
                    </ButtonAdd>
                </div>

                <BoxFormInputValue className="box_input_value">

                    <InputContact
                        type="text"
                        name="name"
                        id="name"
                        label="Nome completo"
                        placeholder="João Barbosa Cardoso"
                        errors={errors}
                        register={register}
                    />

                    <InputContact
                        type="text"
                        name="avatarUrl"
                        id="avatarUrl"
                        label="Imagem de usuário"
                        placeholder="Digite o link da sua imagem"
                        errors={errors}
                        register={register}
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
        </ContainerModal>
    );
};

export { DetailContact };
