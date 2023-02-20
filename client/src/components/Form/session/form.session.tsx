import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { SessionContext } from '../../../contexts';
import { ClientRequestSession } from '../../../interfaces/client.interface';
import { clientSessionSchema } from "../../../serializers/index";
import { ButtonForm } from "../../Button";
import { InputSession } from "../../input";
import { ContainerLink } from '../style';
import { ContainerForm, BoxFormInputValue, ContainerButton } from "./style";

const FormSession = () => {

    const { createSession } = SessionContext();

    const { register, handleSubmit, formState: { errors } } = useForm<ClientRequestSession>({
        resolver: yupResolver(clientSessionSchema)
    });

    return (
        <ContainerForm className='form' onSubmit={handleSubmit(createSession)}
            initial={{scale: 0.5}}
            animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { 
                    type: "spring", 
                    stiffness: 50
                }
            }}
        >
            <h3>Login</h3>

            <BoxFormInputValue >
               {/* <div   className="box_input_value"> */}
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
               {/* </div> */}
            </BoxFormInputValue>

                <div className="footer">
                    <ContainerButton>

                        <ButtonForm className="button_register" type="submit">
                            Entre
                        </ButtonForm>
                        
                    </ContainerButton>
                    <ContainerLink>
                        <span>Ainda não possui uma conta?</span>
                        <Link className='a' to='/register'>Cadastre-se</Link>
                    </ContainerLink>

                </div>
        </ContainerForm>
    );
};

export { FormSession };
