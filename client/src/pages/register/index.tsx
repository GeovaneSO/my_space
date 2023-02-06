import { FormRegister } from "../../components/Form/";
import { HeaderForms } from "../../components/Header";
import { ContainerMainRegister, SectionForm } from "./style";

const Register = () => {
    return (
        <>
            <HeaderForms >
                <h2>Crie sua conta</h2>
                <span>Rápido e grátis, vamos nessa</span>

            </HeaderForms>
            <ContainerMainRegister>
                <SectionForm>
                    <FormRegister />
                </SectionForm>
            </ContainerMainRegister>
        </>
    );
};

export { Register };
