import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { GrFormClose } from "react-icons/gr";
import { InformationContext } from "../../../contexts/information/information.context";
import { InformationRequest } from "../../../interfaces/information.interface";
import { InformationSchema } from "../../../serializers/index";
import { ButtonForm, ButtonAdd } from "../../Button";
import { InputInformation } from "../../input";
import { BoxFormInputValue, ContainerForm } from '../style';
import { ContainerModal } from "./style";

const CreateInformationModal = () => {

    const { createInformationByClient, createInformationModal, setCreateInformationModal, } = InformationContext();

    const { register, handleSubmit, formState: { errors } } = useForm<InformationRequest>({
        resolver: yupResolver(InformationSchema)
    });

    return (
        <ContainerModal>

            <ContainerForm className='form' onSubmit={handleSubmit(createInformationByClient)}>
                <div className="box_title">
                    <h3>Adicione mais um informação para contato</h3>
                        <ButtonAdd
                            className="box_btn"
                            onClick={() => setCreateInformationModal(!createInformationModal)}
                        >
                            <GrFormClose className="svg"/>
                        </ButtonAdd>
                    </div>

                <BoxFormInputValue>
                    <InputInformation
                        type="text"
                        name="email"
                        id="email"
                        label="Endereço de email"
                        placeholder="yourname@email.com"
                        errors={errors}
                        register={register}
                    />

                    <InputInformation
                        type="text"
                        name="phone"
                        id="phone"
                        label="Número de telefone"
                        placeholder="73977778888"
                        errors={errors}
                        register={register}
                    />

                    <ButtonForm className="button_register" type="submit">
                        Adicionar
                    </ButtonForm>
                </BoxFormInputValue>
            </ContainerForm>
        </ContainerModal>
    );
};

export { CreateInformationModal };
