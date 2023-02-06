import {  FormSession } from "../../components/Form/";
import { HeaderForms } from "../../components/Header";
import { ContainerMainRegister, SectionForm } from "./style";

const Login = () => {
    return (
        <ContainerMainRegister>
            <HeaderForms >
                <h2>Entre</h2>
            </HeaderForms>
            <SectionForm>
                <FormSession />
            </SectionForm>
        </ContainerMainRegister>
    );
};

export { Login };
