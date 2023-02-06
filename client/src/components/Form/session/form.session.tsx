import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { SessionContext } from '../../../contexts';
import { ClientRequestSession } from '../../../interfaces/client.interface';
import { clientSessionSchema } from "../../../serializers/index";
import { ButtonForm } from "../../Button";
import { InputSession } from "../../input";
import { BoxFormInputValue, ContainerForm } from '../style';
import { ContainerLink } from "./style";

const FormSession = () => {

    const { createSession } = SessionContext();

    const { register, handleSubmit, formState: { errors } } = useForm<ClientRequestSession>({
        resolver: yupResolver(clientSessionSchema)
    });

    return (
        <ContainerForm className='form' onSubmit={handleSubmit(createSession)}>
            <h3>Login</h3>

            <BoxFormInputValue>
                <InputSession
                    type="text"
                    nameSession="username"
                    id="username"
                    label="Nome de usuário"
                    placeholder="jhon123"
                    errors={errors}
                    register={register}
                />

                <InputSession
                    type="password"
                    nameSession="password"
                    id="password"
                    label="Senha"
                    placeholder="Digite seu senha aqui"
                    errors={errors}
                    register={register}
                />

                <ButtonForm className="button_register" type="submit">
                    Entre
                </ButtonForm>
                
                <ContainerLink>
                    <span>Ainda não possui uma conta?</span>
                    <Link className='a' to='/register'>Cadastre-se</Link>
                </ContainerLink>
            </BoxFormInputValue>
        </ContainerForm>
    );
};

export { FormSession };
