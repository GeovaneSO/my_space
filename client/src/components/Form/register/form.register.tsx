import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { ClientContext } from '../../../contexts';
import { ClientRequest } from '../../../interfaces/client.interface';
import { clientFormSchema } from "../../../serializers/index";
import { ButtonForm } from "../../Button";
import { InputRegister } from '../../input/';
import { BoxFormInputValue, ContainerLink,ContainerForm } from '../style';
// import {  } from "./style";

const FormRegister = () => {

    const { createClient } = ClientContext();

    const { register, handleSubmit, formState: { errors } } = useForm<ClientRequest>({
        resolver: yupResolver(clientFormSchema)
    });

    return (
        <ContainerForm className='form' onSubmit={handleSubmit(createClient)}>
            <h3>Cadastre-se</h3>

            <BoxFormInputValue>
                <InputRegister
                    type="text"
                    name="name"
                    id="name"
                    label="Nome completo"
                    placeholder="João Barbosa Cardoso"
                    errors={errors}
                    register={register}
                />

                <InputRegister
                    type="text"
                    name="username"
                    id="username"
                    label="Nome de usuário"
                    placeholder="jhon123"
                    errors={errors}
                    register={register}
                />

                <InputRegister
                    type="text"
                    name="email"
                    id="email"
                    label="Endereço de email"
                    placeholder="yourname@email.com"
                    errors={errors}
                    register={register}
                />

                <InputRegister
                    type="text"
                    name="phone"
                    id="phone"
                    label="Número de telefone"
                    placeholder="73977778888"
                    errors={errors}
                    register={register}
                />

                <InputRegister
                    type="password"
                    name="password"
                    id="password"
                    label="Senha"
                    placeholder="Digite seu senha aqui"
                    errors={errors}
                    register={register}
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
                />
                <div className="footer">

                    <ButtonForm className="button_register" type="submit">
                        Cadastrar
                    </ButtonForm>
                    <ContainerLink>
                        <span>Já possuí uma conta?</span>
                        <Link to={'/'}>Faça o login</Link>
                    </ContainerLink>
                </div>
            </BoxFormInputValue>

        </ContainerForm>
    );
};

export { FormRegister };
