import { useForm } from 'react-hook-form';
import { ClientRequest } from '../../interfaces/client.interface';
import Button from '../Button';
import { Input } from '../input';
import { BoxFormInputValue, ContainerForm } from './style';

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ClientRequest>({
        // resolver: yupResolver()
    });

    return (
        <ContainerForm className='form' onSubmit={handleSubmit(() => {

        })}>
            <h3>Cadastre-se</h3>

            <BoxFormInputValue>


                <Input
                    type="text"
                    name="name"
                    id="name"
                    label="Nome completo"
                    placeholder="João Barbosa Cardoso"
                    errors={errors}
                    register={register}
                />

                <Input
                    type="text"
                    name="username"
                    id="username"
                    label="Nome de usuário"
                    placeholder="jhon123"
                    errors={errors}
                    register={register}
                />

                <Input
                    type="text"
                    name="email"
                    id="email"
                    label="Endereço de email"
                    placeholder="yourname@email.com"
                    errors={errors}
                    register={register}
                />

                <Input
                    type="text"
                    name="phone"
                    id="phone"
                    label="Número de telefone"
                    placeholder="+55 977778888"
                    errors={errors}
                    register={register}
                />

                <Input
                    type="text"
                    name="password"
                    id="password"
                    label="Senha"
                    placeholder="Digite seu senha aqui"
                    errors={errors}
                    register={register}
                />

                <Input
                    type="text"
                    name="avatarUrl"
                    id="avatarUrl"
                    label="Imagem de usuário"
                    placeholder="Digite o link da sua imagem"
                    errors={errors}
                    register={register}
                />

                <Button className="button_register" type="submit">
                    Cadastrar
                </Button>
            </BoxFormInputValue>
        </ContainerForm>
    );
};

export { Form };
